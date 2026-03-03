const express = require("express");
const cors = require('cors')
const app = express();
const PORT = 3000;

app.use(cors())
const users = [
  { id: 1, name: "Avirag", age: 21, place: "Kochi", department: "Computer Science" },
  { id: 2, name: "Rahul", age: 23, place: "Trivandrum", department: "Mechanical" },
  { id: 3, name: "Anjali", age: 22, place: "Calicut", department: "Electronics" },
  { id: 4, name: "Nikhil", age: 24, place: "Kollam", department: "Civil" },
  { id: 5, name: "Sneha", age: 20, place: "Thrissur", department: "Computer Science" },
  { id: 6, name: "Arjun", age: 25, place: "Kannur", department: "Mechanical" },
  { id: 7, name: "Meera", age: 22, place: "Alappuzha", department: "Electronics" },
  { id: 8, name: "Vishnu", age: 23, place: "Kottayam", department: "Civil" },
  { id: 9, name: "Lakshmi", age: 21, place: "Palakkad", department: "Computer Science" },
  { id: 10, name: "Aditya", age: 24, place: "Malappuram", department: "Mechanical" },
  { id: 11, name: "Diya", age: 20, place: "Kasaragod", department: "Electronics" },
  { id: 12, name: "Sanjay", age: 26, place: "Ernakulam", department: "Civil" },
  { id: 13, name: "Athira", age: 22, place: "Kochi", department: "Computer Science" },
  { id: 14, name: "Rohit", age: 23, place: "Thrissur", department: "Mechanical" },
  { id: 15, name: "Keerthana", age: 21, place: "Trivandrum", department: "Electronics" },
  { id: 16, name: "Abhinav", age: 24, place: "Calicut", department: "Civil" },
  { id: 17, name: "Gokul", age: 25, place: "Kollam", department: "Computer Science" },
  { id: 18, name: "Neha", age: 22, place: "Kannur", department: "Mechanical" },
  { id: 19, name: "Hari", age: 23, place: "Alappuzha", department: "Electronics" },
  { id: 20, name: "Akhil", age: 21, place: "Kottayam", department: "Civil" },
  { id: 21, name: "Fathima", age: 20, place: "Palakkad", department: "Computer Science" },
  { id: 22, name: "Joel", age: 24, place: "Malappuram", department: "Mechanical" },
  { id: 23, name: "Devika", age: 22, place: "Ernakulam", department: "Electronics" },
  { id: 24, name: "Aravind", age: 23, place: "Kochi", department: "Civil" },
  { id: 25, name: "Swathi", age: 21, place: "Thrissur", department: "Computer Science" },
  { id: 26, name: "Manu", age: 25, place: "Calicut", department: "Mechanical" },
  { id: 27, name: "Anu", age: 22, place: "Trivandrum", department: "Electronics" },
  { id: 28, name: "Kiran", age: 24, place: "Kollam", department: "Civil" },
  { id: 29, name: "Sreya", age: 20, place: "Kannur", department: "Computer Science" },
  { id: 30, name: "Vimal", age: 23, place: "Kottayam", department: "Mechanical" }
];

app.get("/api/users", (req, res) => {
  res.json({
    success: true,
    count: users.length,
    data: users
  });
});

app.get('/health', (req, res) => {
  res.send("yeah i'm good!!")
})
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});