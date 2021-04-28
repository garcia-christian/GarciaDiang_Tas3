
const pool = require("./db");

const sql = `SELECT job_id "JOB ID",
COUNT(*) "NO. of employees",
ROUND(MIN(salary)) "Minimum",
ROUND(AVG(salary)) "Average",
ROUND(MAX(salary)) "Maximum",
ROUND(STDDEV(salary),2) "STD Dev"
FROM employees
GROUP BY job_id
ORDER BY job_id ASC;
`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();