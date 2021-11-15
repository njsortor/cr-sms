var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sortor.io",
  user: "uac9nmfirwnax",
  password: "testdb1!",
  database: "dbupyqwb2bsspe"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT CellPhone FROM 25k_i360", function (err, result, fields) {
    if (err) throw err;
    // console.log(result);
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        // console.log(row.CellPhone)
        var recipientList = [];
        recipientList.push(row.CellPhone)
        console.log(recipientList)
        module.exports = recipientList
    })
  });
});

