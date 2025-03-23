const { findcart, addcart, removecarts, clearcarts } = require("../../service/cartsservice")

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

const addtocart= async (req,res)=>
{
    try
    {
     const response = await addcart(req.user.id,req.params.id);
     return res.status(200).json({
         message:"data added successfully",
         success:true,
         data:response,
         error:{},
     })
     
    }
    catch(error)
    {
     return res.status(404).json({
         message:"unable to add to the cart",
         data:{},
         error:error,
         success:false
     })
    }

}
const removetocartc= async (req,res)=>
    {
        try
        {
         const response = await removecarts(req.user.id,req.params.id);
         return res.status(200).json({
             message:"data removed successfully",
             success:true,
             data:response,
             error:{},
         })
         
        }
        catch(error)
        {
         return res.status(404).json({
             message:"unable to add to the cart",
             data:{},
             error:error,
             success:false
         })
        }
    
    }
    const clearcartc= async (req,res)=>
        {
            try
            {
             const response = await clearcarts(req.user.id);
             return res.status(200).json({
                 message:"data clear successfully",
                 success:true,
                 data:response,
                 error:{},
             })
             
            }
            catch(error)
            {
             return res.status(404).json({
                 message:"unable to clear the cart",
                 data:{},
                 error:error,
                 success:false
             })
            }
        
        }
    
module.exports={
    getcart,
    addtocart,
    removetocartc,
    clearcartc
}