const { createcart } = require("../repository/createcart");
const { findUser, createuser } = require("../repository/userrepositry");
const { emit } = require("../schema/usersschema");

   async function  ragisteruser(userdetails){

        const user = await findUser({
            email:userdetails.email,
            phonenumber:userdetails.phonenumber,
        });

        if(user)
        {
            throw{
                reason:"user already exist please enter a new email or phone number",
                status:404
            }
        }

        const newuser= await createuser({
            firstname:userdetails.firstname,
            lastname:userdetails.lastname,
            email:userdetails.email,
            phonenumber:userdetails.phonenumber,
            password:userdetails.password,
            role:userdetails.role
        })

        if(!newuser)
        {
          throw{
            reason:"sorry can'not crate user due to some reason ",
            status:404,
          }
        }

        await createcart(newuser._id);

        return newuser;
    }
module.exports={
    ragisteruser
}