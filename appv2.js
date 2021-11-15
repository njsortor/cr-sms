var mysql = require('mysql')
require('dotenv').load()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const notifyServiceSid = process.env.NOTIFY_SERVICE_SID

const client = require('twilio')(accountSid, authToken)

var con = mysql.createConnection({
  host: "sortor.io",
  user: "uac9nmfirwnax",
  password: "testDb1!!",
  database: "dbupyqwb2bsspe"
})

var recipientList = []

con.connect(function(err) {
  if (err) throw err
   con.query("SELECT CellPhone FROM textlist820", function (err, result, fields) {
    // con.query("SELECT CellPhone from test_notify2", function (err, result, fields) {
    if (err) throw err
    // console.log(result)
    Object.keys(result).forEach(function(key) {
        var row = result[key]
        // console.log(row.CellPhone)
        recipientList.push(row.CellPhone)
    })


    console.log(recipientList)
    recipientList.forEach(number => {
      client.notify.services(notifyServiceSid)
      .notifications.create({
        toBinding: [
          JSON.stringify({
            binding_type: 'sms',
            address: number,
          }),
        ],
        body: 'We have only FIVE HOURS left until the end-of-quarter fundraising deadline and we\'re just several hundred dollars short.\n\nIf you can spare it, please rush some last-minute support to Cooperrider4KY.com/donate\n\n-Andrew Cooperrider'
        // toBinding: JSON.stringify(
          // {binding_type: 'sms', address: '18595336262'},
          // {binding_type: 'sms', address: '18593586464'},
          // This also works for iOS, Android, and FB Messenger.
          // You can mix and match binding_type in the toBinding.
        // ),
        // toBinding: '18593586464'
      })
    })
  })
})