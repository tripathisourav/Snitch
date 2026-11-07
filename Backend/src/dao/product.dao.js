import productModel from "../models/product.model.js";


export const stockOfVariant = async (productId, variantId) => {
    const product = await productModel.findOne({
        _id: productId,
        "variants._id": variantId
    })

    const stock = product.variants.find(variant => variant._id.toString() === variantId).stock

    return stock
}

// In the context of the MERN stack, DAO stands for Data Access Object, which is a design pattern used to separate database access logic from application business logic.  A DAO is typically a class or interface that provides an abstract interface for performing CRUD (Create, Read, Update, Delete) operations on data stored in a database like MongoDB.