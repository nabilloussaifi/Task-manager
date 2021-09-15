






// lib and imports
const express = require("express");
const app = express();
const task = require("./controllers/task")

// app setup
app.use(express.json())
app.use("/static", express.static("public"));
app.set("view engine", "ejs");


// pages
app.get('/', (req, res) => {
  res.render('tasks.ejs');
});


app.post("/api/addtask", (req, res) => {
  // console.log("hello from the brain")
  console.log("coming from the brain", req.body)
  task.addInputToDB(req.body)
})


app.post("/api/alltask", (req, res) => {
  task.fetchAllTask(res)
})



app.post("/api/update", (req, res) => {
  console.log(req.body)
})


app.listen(4000, () => console.log("Server Up and running"));


