const mongoose=require('mongoose');
const TourSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true   
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
});
const tourModel=new mongoose.model("tour",TourSchema);
module.exports=tourModel;