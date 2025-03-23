const cart = require("../schema/cartschema")
const { product } = require("../schema/productscehma")

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
        }).populate("items.product")
        return getcart;
    } catch (error) {
        console.error("Error in getcarts repository:", error);  // ✅ Debug log
        throw {
            message: "Cannot find the carts from repository layer",
            originalError: error   // Optional: include for debugging
        };
    }
};
  
const clearcart = async (userid) => {
    try {
        const cartr = await cart.findOne({ user: userid });

        if (!cartr) {
            throw { message: "Cart not found for user" };
        }

        cartr.items = [];  
        await cartr.save();  

        return cartr;  // Return the updated cart
    } catch (error) {
        console.error("Error in clearcart repository:", error);
        throw { message: "Error in clearing the cart in repository layer", originalError: error };
    }
};


module.exports={
    createcart,
    getcarts,
    clearcart
}