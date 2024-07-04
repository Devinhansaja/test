const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "latex-collecting.cv6k2qqyuwkp.ap-southeast-2.rds.amazonaws.com",
  user: "admin",
  password: "LatexMnage12",
  database: "latex_management",
});

console.log("db");

module.exports = pool.promise();