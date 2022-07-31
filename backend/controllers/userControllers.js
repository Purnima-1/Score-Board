const bcrypt = require("bcryptjs")
const Users = require('../schema/UserModel')
const generateToken = require('../utils/generateToken')

exports.register = async (req,res) => {
  const {name,email,password} = req.body 
    const userExists = await Users.findOne({email})
 if(userExists){
    res.status(409).send({status: 'User already exists'})
    return
 }
try{
    const user = await Users.create({
        name,email,password
    })
    if(user) {
        res.status(201).json({
            _id:user._id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id),
            status: "Registration successful"
        })
        return
    }
} catch(err){
 res.status(400).send({
    status: "Please try again later",
    data: err
 })   
}
}

exports.login = async (req,res) => {
    const {email,password} = req.body 
    try{
     const user = await Users.findOne({email})
     console.log(user)
          if(user && bcrypt.compareSync(password,user.password)){
          res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
        status: "Successful Login"
    })
    return
     } else{
        res.status(403).send({
            status: "Please check your credentials"
        })
        return
     }
    }catch(err){
  res.status(400).send({
    status: "Please try again later",
    data: err
  })
    }
    }