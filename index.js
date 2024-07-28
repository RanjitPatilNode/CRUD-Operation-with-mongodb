const dbConnect = require("./mongodb")

    // let collection = db.collection('products');
    // let data = await collection.find({}).toArray()
    // console.log("🚀 ~ dbConnect ~ data:", data)

// ******* with promise***********

dbConnect().then((resp) => {
    resp.find().toArray().then((data) => {
        console.log(data)
    })
})
// dbConnect()
// console.log(data)

// ******** with async await**********

const main = async () => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
}
main()