
const pool = require("./db");

const sql = `SELECT EXTRACT(year from hire_date) "YEAR",

SUM(salary) "Total Salary"
FROM employees GROUP BY EXTRACT(year from hire_date)
ORDER BY EXTRACT(year from hire_date) ASC;

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();