var mysql = require('mysql');

var con = mysql.createConnection({
  host: "sortor.io",
  user: "uac9nmfirwnax",
  password: "Nascar24!!@!",
  database: "dbupyqwb2bsspe"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "SELECT CellPhone FROM 25k_i360";
  con.query(sql, function (err, row, result, fields) {
    if (err) throw err;
    Object.keys(result).forEach(function(key) {
        var row = result[key];
        console.log(row)
    })
    Object.entries(result).forEach(
        ([key, value]) => console.log(key, value)
    )
  var number = row[0]
  var recipientList = []
  recipientList.push(number)
  console.log('List: ', recipientList)
  console.log('Num: ', number)
  });
});

/* var recipientList = []

recipientList.append(result)

console.log(recipientList) */
