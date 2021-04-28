
const pool = require("./db");

const sql = `SELECT 
COUNT(*) "Number of Locations"

FROM locations

`;


pool.query(sql,(err,res)=>{
    if(err){
        console.log(err.stack);
    }else{
        console.log(res.rows);
    }

});
pool.end();