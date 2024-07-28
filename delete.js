const dbConnect = require('./mongodb');

const  deletData= async ()=>{
    let data = await dbConnect();
    let result = await data.deleteOne(
        {name:"note5"}
    ) 
    console.log(result)
}
deletData();