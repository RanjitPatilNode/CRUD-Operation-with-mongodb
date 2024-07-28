// insert data in mongodb 
 
const dbConnect = require("./mongodb")

const insert = async () => {
    const db = await dbConnect();
    const result = await db.insertOne(
        { name: "note5", brand: "vivo", price: 320 }
    )
    console.log(result)
}
insert();