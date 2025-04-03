import mongoose, {Schema} from "mongoose";
import { ProductCollection, ProductStatus, } from "../libs/enums/product.enum";

// Scheme first & Code first;

const productSchema = new  Schema(
    {
      productStatus :{
        type:  String,
        enum : ProductStatus,
        default: ProductStatus.PAUSE,
      },

      productCollection :{
        type:  String,
        enum: ProductCollection,
        required: true,
      },

      productName: {
        type:  String,
        required: true,
      },

      productPrice: {
        type:  Number,
        required: true,
      },

      productLeftCount: {
        type:  Number,
        required: true,
      },

      productDiscount :{
        type:  Number,
      },

      productDesc: {
        type:  String,
      },

      productImages: {
        type:  [String],
        default: [],
      },

      productViews: {
        type:  Number,
        default: 0,
      },

    }, {timestamps: true}
)    // timestamp -> vazifasi qachon createAt, qachon updateAt bo'lganini ko'rsatib beradi.
productSchema.index({productName: 1,}, {unique: true})
export default mongoose.model("Product", productSchema);