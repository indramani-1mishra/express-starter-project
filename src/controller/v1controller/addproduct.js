const { addproduct, findproductbyid, deleteproductsbyids, updateproducts, findallproduct } = require("../../service/productservice")

const addproductc = async(req, res) => {
    try {
       
        if (!req.file) {
            return res.status(400).json({
                message: "No file uploaded",
                success: false,
                error: {},
            });
        }

        const response = await addproduct({
            productname: req.body.productname,
            description: req.body.description,
            image: req.file.path,
            price: req.body.price,
            category: req.body.category,
            instock: req.body.instock,
            quantity:req.body.quantity,
        });

        return res.status(201).json({
            message: "Successfully added product",
            data: response,
            error: {},
            success: true
        });

    } catch (error) {
        console.error("Error in addproductc:", error);  
        return res.status(500).json({ 
            message: "Product not added",
            success: false,
            error: error.message || "Unknown error"  
        });
    }
};

const getproductbyidc= async(req,res)=>
{
    try
    {
       const response = await findproductbyid(req.params.id);
       if(response)
       {
        return res.status(200).json({
            message:"data fetched successfully",
            data:response,
            error:{},
            success:true
        })
       }
    }
    catch(erron){

        return res.status(404).json({
            message:"error in find user ",
            success:false,
            data:{},
            error:erron
        })
    }
}
const deletproductbyidc = async (req, res) => {
    try {
        const response = await deleteproductsbyids(req.params.id);

        if (!response) {
            return res.status(404).json({
                message: "Product not found or already deleted",
                success: false,
                data: {},
                error: {},
            });
        }

        return res.status(200).json({
            message: "Product deleted successfully",
            success: true,
            data: response,
            error: {},
        });

    } catch (error) {
        console.error("DELETE CONTROLLER ERROR:", error);
        return res.status(500).json({
            message: "Error in deleting product",
            success: false,
            data: {},
            error: error.message || error,
        });
    }
};

const updateproductc = async (req, res) => {
    try {
        const productData = {
            productname: req.body.productname,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            instock: req.body.instock,
           
        };

        // ✅ If file is uploaded, add image path
        if (req.file) {
            productData.image = req.file.path;  // multer sets `file.path`
        }

        const response = await updateproducts(req.params.id, productData);

        return res.status(200).json({
            message: "Product updated successfully",
            success: true,
            data: response,
            error: {},
        });

    } catch (error) {
        console.error("Controller Error:", error);
        return res.status(500).json({
            message: "Error in updating product",
            success: false,
            data: {},
            error: error.message || error,
        });
    }
};

const fetchallproduct = async (req, res) => {
    try {
        const response = await findallproduct();
        return res.status(200).json({
            message: "Data fetched successfully",
            success: true,
            data: response,
            error: null  // ❌ Instead of empty {}, use null (more conventional)
        });
    } catch (error) {
        console.error("Controller Error (fetchallproduct):", error);  // 🔍 Log actual error

        return res.status(500).json({
            message: "Error in fetching all products",
            success: false,
            data: null,  // ❌ Empty object is okay, but null is cleaner
            error: error.reason || error.message || "Unknown error"  // 🔎 Error detail
        });
    }
};


    
module.exports={
  addproductc,
  getproductbyidc,
  deletproductbyidc,
  updateproductc,
  fetchallproduct
}