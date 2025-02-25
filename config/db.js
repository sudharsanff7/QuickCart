import mongoose, { Promise } from "mongoose";

let catched = global.mongoose

if (!cached) {
    cached = global.mongoose = { conn: null,Promise: null }
}

async function connectDB() {

    if (cached.conn) {
        return cached.conn
    }
    
    if (!cached.Promise) {
        const ops = {
            bufferCommands : false
        }  
        
        cached.Promise = mongoose.connect('${process.env.MONGODB_URI}/quickcart',opts).then(mongoose => {
            return mongoose
        })
        
    }
   
    cached.conn = await catched.Promise
    return catched.conn

}

export default connectDB