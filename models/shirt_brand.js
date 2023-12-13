import mongoose from 'mongoose';
let Schema = mongoose.Schema

let Shirt_brandSchema = Schema ({
  name: String
})

export default mongoose.model('shirt_brand',Shirt_brandSchema, 'shirt_brand')