const { findcart } = require("../../service/cartsservice")

const getcart =async (req,res)=>
{
    try
   {
    const response = await findcart(req.user.id);
    return res.status(200).json({
        message:"data fetched successfully",
        success:true,
        data:response,
        error:{},
    })
    
   }
   catch(error)
   {
    return res.status(404).json({
        message:"unable to find the cart",
        data:{},
        error:error,
        success:false
    })
   }
}

module.exports={
    getcart
}