const login=(req,res)=>{
    res.send("hey i ma login in your website and i am mern stack developer")
}

const register=(req,res)=>{
    res.send("he i am register in website")
}
const logout=(req,res)=>{
    res.send("i am logout from website")
}
const age=(req,res)=>{
    res.send("my age is 21 year old")
   
}
const college=(req,res)=>{
    res.send("hey i pass out from hierank ")
   
}

module.exports={login,register,logout,age,college}