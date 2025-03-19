const { response } = require("express");
const userrepository = require("../../repository/userrepositry");
const Userservice = require("../../service/userservice");

const createuserc = async (req, res) => {
  //  console.log(req.body);

    const Userservice1 = new Userservice(new userrepository());
    try
    {
        const response = await Userservice1.ragisteruser(req.body);
        //console.log(response+"respone");
        return res.status(201).json({
            message: "ok",
            data:response,
            success:true,
            error:{},
        });
    }
    catch(error)
    {
        return res.status(404).json({
            message:"user not created",
            data:{},
            success:false,
            error:error
        })
    }
   
};


module.exports = {
    createuserc
};
