import mongoose from "mongoose";
const connectDb  = async ()=>{
 try{
    const conn  = mongoose.connect(process.env.MONGO_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    });
    console.log(`Mongodb Connected `);
 }catch(error){
    console.log(`Error:${error.mongoose}`);
    process.exit(1);
 }
};
export default connectDb