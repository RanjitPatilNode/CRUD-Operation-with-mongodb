const dbConnect = require("./mongodb")

const updateData= async()=>{
    let data = await dbConnect();
    let result = await data. updateOne(
        {name:'note5'},{
            $set:{name:"max pro5"}
        }
    
    )
    console.log(result)

}
updateData();