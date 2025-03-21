const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { findUser } = require('../repository/userrepositry');
const { JWT_SECRET_KEY, EXPIRE_TIME } = require('../config/serverconfig');

const loginuser = async (logindetails) => {
  const email = logindetails.email;
  const password = logindetails.password;

  const user = await findUser({ email });  // ✅ Await added here

  if (!user) {
    throw {
      message: "No user found with this email",
      status: 404,
    };
  }

  const isvalidpassword = await bcrypt.compare(password, user.password);
  if (!isvalidpassword) {
    throw {
      message: "Invalid password, please try again",
      status: 401,
    };
  }

  const token = jwt.sign(
    { email: user.email, id: user._id },
    JWT_SECRET_KEY,
    { expiresIn: EXPIRE_TIME }
  );

  return token;
};

module.exports = {
  loginuser
};
