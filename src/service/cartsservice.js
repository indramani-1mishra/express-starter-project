const { getcarts, clearcart } = require("../repository/createcart");
const { getproductbyid } = require("../repository/productrepository");
const cart = require("../schema/cartschema");
const { product } = require("../schema/productscehma");

const findcart = async (userid) => {
    try {
        const response = await getcarts(userid);
        return response;
    } catch (error) {
        console.error("Error in findcart service:", error);  // 🔍 Debugging
        throw {
            message: "Error in service layer",
            originalError: error   // Optional: Include original error
        };
    }
};
 

const addcart = async (userid, productid) => {
    const cart = await findcart(userid);
    const product = await getproductbyid(productid);

    if (!product) {
        throw { message: "Product not found" };
    }

    if (!product.instock) {
        throw {
            message: "Product currently not available in stock"
        };
    }

    let cartfind = false;

    cart.items.forEach(item => {
        let itemProductId = typeof item.product === "object" ? item.product._id.toString() : item.product.toString();
        if (itemProductId === productid) {
            console.log("Product already in cart, increasing quantity");
            item.quantity += 1;
            cartfind = true;
            console.log(item.product);
        }
    });

    if (!cartfind) {
        cart.items.push({
            product: productid,
            quantity: 1
        });
    }

    product.quantity--;

    // Check if product quantity becomes 0, update instock status
    if (product.quantity <= 0) {
        product.instock = false;
    }

    await product.save();  // Save the updated product quantity
    await cart.save();     // Save the cart changes
    return cart;
};


const removecarts = async (userid, productid) => {
    const cart = await findcart(userid);
    if (!cart) {
        throw { message: "Cart not found" };
    }

    const product = await getproductbyid(productid);
    if (!product) {
        throw { message: "Product not found" };
    }

    let cartfind = false;
    let productIdStr = productid.toString();

    for (let i = 0; i < cart.items.length; i++) {
        let item = cart.items[i];
        let itemProductId = typeof item.product === "object" ? item.product._id.toString() : item.product.toString();

        if (itemProductId === productIdStr) {
            cartfind = true;

            // Decrease quantity from cart
            item.quantity -= 1;

            // Increase product quantity (⚠️ Always)
            product.quantity++;

            // If product was out of stock, mark it in stock
            if (product.quantity > 0) {
                product.instock = true;
            }

            // Remove item from cart if quantity <= 0
            if (item.quantity <= 0) {
                cart.items.splice(i, 1);  // remove the item
            }

            break;  // Exit loop after found
        }
    }

    if (!cartfind) {
        throw { message: "Product not found in cart" };
    }

    await product.save();
    await cart.save();

    return cart;
};

const clearcarts= async(userid)=>
{
    try
    {
        const response=await clearcart(userid);
        if(!response)
        {
            throw{message:"response not found"}
        }
        return response;
    }
    catch(error)
    {
        throw{message:"not found"};
    }
}


module.exports = {
    findcart,
    addcart,
    removecarts,
    clearcarts
}; 