

const midddle_one=(req,res,next)=>{


    console.log(" i am middle ware one")

    next()

}
const midddle_two=(req,res,next)=>{

    console.log(" i am middle ware two")
    next()

}


module.exports={midddle_one,midddle_two}