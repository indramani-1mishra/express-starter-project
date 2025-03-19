const { emit } = require("../schema/usersschema");

class Userservice{


    constructor(_userrepository)
    {
        this.userrepository= _userrepository;
    }

   async ragisteruser(userdetails){

        const user = await this.userrepository.findUser({
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

        const newuser= await this.userrepository.createuser({
            firstname:userdetails.firstname,
            lastname:userdetails.lastname,
            email:userdetails.email,
            phonenumber:userdetails.phonenumber,
        })

        if(!newuser)
        {
          throw{
            reason:"sorry can'not crate user due to some reason ",
            status:404,
          }
        }

        return newuser;

    }

    
}
module.exports=Userservice;