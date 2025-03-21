const { loginuser } = require("../../service/loginservice");

const loginc= async(req,res)=>
{
    const payload = req.body;
    console.log(payload);
    try
    {
      const response =  await loginuser(payload);
      res.cookie("authtoken",response,{
        httpOnly:true,
        secure:false,
        maxAge: 7*24*60*60*1000,
      })
      return res.status(404).json({
        message:"logged in successfully",
        success:true,
        data:{},
        error:{}
      })

    }
    catch(error)
    {
     return res.status(404).json({
        message:"did not validate password",
        error:error,
        success:false,
        data:{}
     })
    }




}


module.exports={
    loginc
}