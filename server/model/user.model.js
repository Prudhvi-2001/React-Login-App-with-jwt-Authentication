import mongoose from 'mongoose'
export const UserSchema=mongoose.Schema({
    username:{
        type:String,
        required:[true,"Please provide unique Username"],
        unique:[true,"Username Exist"]
    },
    password:{
        type:String,
        required:[true,"Please provide password"],
        unique:false
    },
    email:
    {
        type:String,
        required:[true,"Please provide Email"],
        unique:true

    },
    firstnmae:{type:String},
    lastname:{type:String},
    mobile:{type:Number},
    address:{type:String},
    profile:{type:String}
})
export default mongoose.model.Users || mongoose.model('User',UserSchema)
