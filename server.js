const express = require("express");
const cors =require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
const users = [
  {
    id: 1,
    name: "Avirag",
    age: 21,
    place: "Kochi",
    department: "Computer Science"
  },
  {
    id: 2,
    name: "Rahul",
    age: 23,
    place: "Trivandrum",
    department: "Mechanical"
  },
  {
    id: 3,
    name: "Anjali",
    age: 22,
    place: "Calicut",
    department: "Electronics"
  },
  {
    id: 4,
    name: "Nikhil",
    age: 24,
    place: "Kollam",
    department: "Civil"
  }
];


app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

app.get('/health',(req,res)=>{
    res.send("yeah i'm good!!")
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});