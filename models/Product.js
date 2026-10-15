const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, 'Product name is required'], trim: true },
    description: { type: String, trim: true },
    price: { type: Number, required: [true, 'Price is required'], min: [0, 'Price cannot be negative'] },
    category: { type: String, required: [true, 'Category is required'], trim: true },
    stock: { type: Number, default: 0, min: [0, 'Stock cannot be negative'] },
    image: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  },
  { timestamps: true }
);

productSchema.index({ name: 1 });
productSchema.index({ category: 1, price: -1 });

module.exports = mongoose.model('Product', productSchema);
