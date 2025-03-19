const User = require("../schema/usersschema");

class userrepository
{
   
    async findUser(parameter){
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
    async createuser(userdetails)
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
}

module.exports =userrepository;

