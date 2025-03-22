const cart = require("../schema/cartschema")

const createcart = async(userid)=>
{
   try
   {
     const response = await cart.create({
        user:userid
     })
     return response
   }
   catch(error)
   {
     throw {messgae:"unable to crate cart in repository"}
   }
}

const getcarts = async (userid) => {
    try {
        const getcart = await cart.findOne({
            user: userid
        });
        return getcart;
    } catch (error) {
        console.error("Error in getcarts repository:", error);  // ✅ Debug log
        throw {
            message: "Cannot find the carts from repository layer",
            originalError: error   // Optional: include for debugging
        };
    }
};

module.exports={
    createcart,
    getcarts
}