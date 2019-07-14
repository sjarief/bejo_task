const { MongoClient, ObjectID } = require("mongodb")

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "task_manager_bejo"

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client) => {
    if(error){
        return console.log("ngga bisa konek ke database!")
    }
    const db = client.db(databaseName)

    //hapus satu file
    // db.collection("tasks").deleteOne({
    //     name: "ngoding"
    // }).then((result)=> {
    //     console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    //hapus banyak file
    // db.collection("users").deleteMany({
    //     age: 25
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //update banyak file
    // db.collection("tasks").updateMany({
    //     completed: false
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result.modifiedCount)
    // }).catch((error) => {
    //     console.log(error)
    // })

    //update satu file
    // db.collection("users").updateOne({
    //     _id: new ObjectID("5d2ae4995aa97a0a50e5fcd2")
    // }, {
    //     $set: {
    //         name: "bejo tamvan"
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // }) 
   
    //cari satu file
    // db.collection("users").findOne({ _id: new ObjectID("5d2ae4995aa97a0a50e5fcd2")}, (error, user) => {
    //     if(error){
    //         return console.log("ngga bisa ambil data")
    //     }
    //     console.log(user)
    // })
    // db.collection("users").find({age: 24}).toArray((error, users) => {
    //     console.log(users)
    // })

    // db.collection("tasks").findOne({ _id: new ObjectID("5d2ae27fc5e15910a01868a7")}, (error, task) => {
    //     if(error){
    //         return console.log("ngga bisa konek kedatabase")
    //     }
    //     console.log(task)
    // }) 

    //cari banyak file dengan varian sama
    // db.collection("tasks").find({completed: false}).toArray((error, tasks) => {
    //     console.log(tasks)
    // })       

    //buat satu file
    // db.collection("users").insertOne({
    //     _id: id,
    //     name: "Syarif tamvan",
    //     age: 24
    // }, (error, result) => {
    //     if(error){
    //         return console.log("ngga bisa masukin data user")
    //     }
    //     console.log(result.ops)
    // })

    //buat banyak file
    // db.collection("users").insertMany([
    //     {
    //         name: "Jo",
    //         age: 24
    //     },
    //     {
    //         name: "jobe",
    //         age: 24
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("ngga bisa masukin data2 ke dokumen")
    //     }
    //     console.log(result.ops)
    // })

    // db.collection("tasks").insertMany([
    //     {
    //         description: "bersihin kamar",
    //         completed: true
    //     }, {
    //         description: "bersihin halaman",
    //         completed: false
    //     }, {
    //         name: "ngoding",
    //         completed: false
    //     }
    // ], (error, result) => {
    //     if(error){
    //         return console.log("ngga bisa input ke database")
    //     }         
    //     console.log(result.ops)  
    // })

})