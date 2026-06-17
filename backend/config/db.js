const mongoose=require("mongoose");
const connectDB=async()=>{
    try{
        
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`MongoDB Connected | Port: ${process.env.PORT}`);
    }
    catch(error){
    console.error("FULL ERROR:");
    console.error(error);
    console.error(error.message);
}
    };
    module.exports=connectDB;