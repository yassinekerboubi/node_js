const express = require("express")
const router = express.Router()

const db = require("../database")



const usersArray =[
    { id: 1, firstName: "John", lastName: "Doe", role: "admin" },
    { id: 2, firstName: "Jane", lastName: "Smith", role: "user" },
    { id: 3, firstName: "Alice", lastName: "Johnson", role: "moderator" },
    { id: 4, firstName: "Bob", lastName: "Brown", role: "user" },
    { id: 5, firstName: "Charlie", lastName: "Davis", role: "admin" },
]

// get Method
router.get("/users", (req, res) => {
    db.all('SELECT * FROM users', [], (err, rows) => {
        if (err) {
          res.status(500).json({ error: err.message });
        } else {
          res.json(rows);
        }
      });
    
})

//post Method
router.post("/users/:id", (req, res) => {
} )

// put Method
router.put("/users/:id", (req, res) => {
} )

// delet Method
router.delete("/users/:id", (req, res) => {
} )


module.exports = router







