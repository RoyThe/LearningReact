const express = require("express")
const app = express()
const sql = require("mssql");

const PORT = 3000

app.get('/', (req, res) => {
    // config for your database
    let config = {
        user: 'sa',
        password: 'I543iz4tRs6VwNs9AO',
        server: '127.0.0.1,59157', 
        database: 'dbLaTaleWorld_2' ,
    
    };

    // connect to your database
    sql.connect(config, function (err) {
    
        if (err) {
            console.log(err)
            res.status(500).end()
            return
        }

        // create Request object
        var request = new sql.Request();
           
        // query to the database and get the records
        request.query('select * from tbluPVPHistory2', function (err, recordset) {
            
            if (err) console.log(err)

            // send records as a response
            res.send(recordset);
            
        })
    })
})

app.listen(PORT, () => {
    console.log(`App running on port: ${PORT}`)
})

