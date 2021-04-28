
const pool = require("./db");

const sql = `SELECT 

MAX(salary) "Maximum Salary",
MIN(salary) "Minimum Salary"

FROM employees WHERE department_id = 60;
`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();