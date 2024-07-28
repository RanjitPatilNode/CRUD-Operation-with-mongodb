const express = require("express");
const dbConnect = require("./mongodb");
const app = express();

app.use(express.json())

app.get("/", async (req, resp) => {
    let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data)
    resp.send(data)
});

app.post("/", async (req, resp) => {
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    // console.log(req.body)
    resp.send(result)
})

app.put("/", async (req, resp) => {
    let data = await dbConnect();
    let result = data.updateOne(
        { name: "max pro5" },
        { $set: req.body}
    )
    // console.log(req, resp)
    resp.send({ result: "update" })
})

app.delete("/:id", async (req , resp)=>{
    console.log(req.params.id)
    const data = await dbConnect();
    let result = await data.deleteOne({_id: req.params.id})
    resp.send(result)
})
app.listen(5500)


