const { product } = require("../schema/productscehma");

const createproduct = async (productdetails) => {
    try {
        const response = await product.create(productdetails);
        return response;
    } catch (error) {
        console.log("error in create user in repository layer: " + error);
        throw error; 
    }
};

const getproductbyid = async (productid) => {
    try {
        if (!productid) {
            throw {
                reason: "Product ID is required",
            };
        }

        const response = await product.findById(productid);

        if (!response) {
            throw {
                reason: "No product found with this ID",
            };
        }

        return response;

    } catch (error) {
        throw {
            reason: "Error in finding product by ID",
            error: error
        };
    }
};

const deleteproductsid = async (productid) => {
    try {
        const response = await product.findByIdAndDelete(productid);

        if (!response) {
            throw {
                reason: "Product not found, possibly already deleted",
            };
        }

        return response;  // Product delete hua
    } catch (error) {
        throw {
            reason: "Error deleting product by ID",
            error: error
        };
    }
};

const updateproduct = async (productid, products) => {
    try {
        const response = await product.findByIdAndUpdate(
            productid,
            products,
            { new: true, runValidators: true }
        );

        if (!response) {
            throw new Error("Product not found");
        }

        return response;

    } catch (error) {
        throw {
            reason: "Error in updating product by ID",
            error: error,
        };
    }
};

const getallproduct = async () => {
    try {
        const response = await product.find();
        return response;
    } catch (error) {
        console.error("Repository Error (getallproduct):", error);  // 🔍 Log the real error
        throw {
            reason: "Error in fetching all products in repository layer",
            originalError: error.message || error   // 🔎 Original error for tracing
        };
    }
};



module.exports = {
    createproduct,
    getproductbyid,
    deleteproductsid,
    updateproduct,
    getallproduct
};
