import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: String,
        password: String,
        firstname: String,
        lastname: String
    },{
      versionKey:false  
    }
);

export default mongoose.model('UserModel', 
userSchema, 'users');