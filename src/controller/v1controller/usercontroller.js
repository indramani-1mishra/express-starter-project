const { response } = require("express");
const { ragisteruser } = require("../../service/userservice");

const createuserc = async (req, res) => {
  //  console.log(req.body);
    try
    {
        const response = await ragisteruser(req.body);
        //console.log(response+"respone");
        return res.status(201).json({
            message: "user created successfully",
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
