
const pool = require("./db");

const sql = 'SELECT ROUND(AVG(salary)) FROM employees ';


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows[0]);
    }

});
pool.end();