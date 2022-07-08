const mongoose = require("mongoose")
const brcypt = require("bcryptjs")

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email:{ 
        type: String,
        required: true,
        unique: true
        },
        password:{
            type: String,
            required: true
        },
          },
          {timestamps: true},
)
UserSchema.pre("save", async function(next){
    if(!this.isModified('password')){
        next()
    }
    const salt = await brcypt.genSalt(10)
    this.password = await brcypt.hash(this.password,salt)
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel