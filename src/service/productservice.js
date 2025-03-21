const cloudinary = require("../config/cloudinaryconfig");
const { createproduct, getproductbyid, deleteproductsid, updateproduct, getallproduct } = require("../repository/productrepository");
const fs = require('fs/promises');

const addproduct = async (productdetails) => {
    try {
        let productimage = "";

        if (productdetails.image) {
            const cloudinary_response = await cloudinary.uploader.upload(productdetails.image);
            productimage = cloudinary_response.secure_url;
            await fs.unlink(productdetails.image);  // Delete local file
        }

        const product = await createproduct({
            ...productdetails,
            image: productimage,
        });

        if (!product) {
            throw new Error("Unable to create product");
        }

        return product;
    } catch (error) {
        throw new Error("Error in service layer (addproduct): " + (error.message || JSON.stringify(error)));
    }
};

const findproductbyid = async (productid) => {
    try {
        if (!productid) {
            throw new Error("Product ID not provided");
        }

        const response = await getproductbyid(productid);
        if (!response) {
            throw new Error("Product not found");
        }

        return response;

    } catch (error) {
        throw new Error("Error in service layer (findproductbyid): " + (error.message || JSON.stringify(error)));
    }
};

const deleteproductsbyids = async (productid) => {
    try {
        const response = await deleteproductsid(productid);
        if (!response) {
            throw new Error("Product not found or already deleted");
        }

        return response;

    } catch (error) {
        throw new Error("Error in service layer (deleteproductsbyids): " + (error.message || JSON.stringify(error)));
    }
};

const updateproducts = async (productid, products) => {
    try {
        const response = await updateproduct(productid, products);
        if (!response) {
            throw new Error("Product not found for update");
        }
        return response;

    } catch (error) {
        console.error("Service Error:", error);
        throw {
            reason: "Error in service layer (updateproducts)",
            error: error,
        };
    }
};

const findallproduct = async()=>
{
    try
    {
     const response = await getallproduct();
     return response;
    }
    catch(error)
    {
        throw {message:'error in service layer'}
    }
    
}

module.exports = {
    addproduct,
    findproductbyid,
    deleteproductsbyids,
    updateproducts,
    findallproduct
};
