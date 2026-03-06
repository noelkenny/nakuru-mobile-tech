const express = require("express")
const mysql = require("mysql2")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const db = mysql.createConnection({
host:"localhost",
user:"root",
password:"",
database:"nakuru_mobile_tech"
})

db.connect(err=>{
if(err) throw err
console.log("Database connected")
})

app.post("/book", (req,res)=>{

const {name,phone_no,service,problem,location} = req.body

const sql = `
INSERT INTO bookings
(name,phone_no,service,problem,location)
VALUES (?,?,?,?,?)
`

db.query(sql,[name,phone_no,service,problem,location],(err,result)=>{
if(err) throw err
res.send("Booking saved")
})

})

app.get("/bookings",(req,res)=>{

db.query("SELECT * FROM bookings",(err,result)=>{
res.json(result)
})

})

app.listen(5000,()=>console.log("Server running"))