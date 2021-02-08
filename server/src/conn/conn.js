const mongoose=require('mongoose');
const connection_url="mongodb+srv://birthdayremainder:birthdayremainder123@cluster0.l8dju.mongodb.net/tour?retryWrites=true&w=majority";
mongoose.connect(connection_url,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log('this is suceesfully connect');
}).catch((err)=>{
    console.log(err);
});