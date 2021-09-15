const sqlite3 = require('sqlite3').verbose();

// BACKEND FILE FOR MY DATABASES QUERIES

//code to fetch from db

const fetchAllTask = (res) => {
    let dataForUser = { tasks: [] }

    let db = new sqlite3.Database('./dataBase/db.taskmanager');

    let sql = `SELECT * FROM task`;

    db.all(sql, [], (err, rows) => {
        if (err) {
            throw err;
        }
        rows.forEach((row) => {
            console.log(row);
            dataForUser.tasks.push(row)
        });
        console.log(dataForUser)
        res.send(dataForUser)
    });

    // close the database connection
    db.close();

}











//code to add to the db

const addInputToDB = (dataReceivedFrombrain) => {
    console.log("coming from the back", dataReceivedFrombrain)


    let db = new sqlite3.Database('./dataBase/db.taskmanager');

    // insert one row into the langs table
    db.run(`INSERT INTO task(content) VALUES(?)`, [dataReceivedFrombrain["task"]], function (err) {
        if (err) {
            return console.log(err.message);
        }
        // get the last insert id
        console.log(`A row has been inserted with rowid ${this.lastID}`);
    });
    // close the database connection
    db.close();



    const updateTaskOnDb = (taskId) => {


    }












    exports.addInputToDB = addInputToDB
    exports.fetchAllTask = fetchAllTask
}