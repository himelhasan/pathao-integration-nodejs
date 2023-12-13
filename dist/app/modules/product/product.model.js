"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const productSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true, trim: true, maxlength: 200 },
    price: { type: Number, required: true, default: 0 },
    sku: { type: String, required: true, unique: true },
}, {
    timestamps: true,
});
const productModel = (0, mongoose_1.model)("Product", productSchema);
exports.default = productModel;
