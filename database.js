const {
    createPool 
 } = require('mysql')

const pool = createPool({
    host:"localhost",
    user: "root",
    password: "",
    database: "cell_death",
    connectionLimit: 10
})

pool.query('select * from celldeath', (err,result, fields) => {
    if(err) {
        return console.log(err);
    }
    return console.log(result);
    const data = result;
})

module.exports = pool;

/* function searchbyid() {
    pool.query('select * from celldeath' , (err,result,fields) => {
        if(err) {
            return console.log(err);
        }
        return console.log(result);
    })
} */