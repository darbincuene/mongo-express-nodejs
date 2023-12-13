import mongoose from 'mongoose';
let Schema = mongoose.Schema

let Shirt_listSchema = Schema ({
  name: String,
  price:Number,
  size:String,
  color:String,
  photo:String
})

export default mongoose.model('shirt_list',Shirt_listSchema, 'shirt_list')