const User = require("../schema/usersschema");

    async function findUser(parameter){
      try
      {
        const response = await User.findOne({...parameter});
        return response;

      }
      catch(error)
      {
        console.log("error find at repository layer"+error)
      }
    }
    async  function createuser(userdetails)
    {
        try
        {
          const response = await User.create(userdetails)
          return response;
  
        }
        catch(error)
        {
          console.log("error find at repository layer"+error)
        }
        
    }


module.exports ={
  findUser,
  createuser
}

