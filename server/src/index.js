// Добавим дополнительные плагины Express:
// - CORS (Для доступа к удаленным хостам),
// - morgan (Для ведения логов),
// - bodyParser (Для получения данных с Frontend)
// - config (Тут храним необходимые настройки сервера, 
// такие как порт, имя базы данных, логин, пароль)

const express = require('express'),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      morgan = require('morgan'),
      mysql = require('mysql'),
      app = express(),
      config = require('./config/config')

let connection = mysql.createConnection({
  host     : config.dbHost,
  user     : config.dbUser,
  password : config.dbPassword,
  database : config.db
})


app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
//app.use(require('./routes/registration'))

// Подключаемся к базе
connection.connect((err)=>{
  if(err==null) {
    console.log(`connected to data base`)
    app.listen(process.env.PORT || config.port, 
      () => console.log(`Server start on port ${config.port} ...`))

  } else {
    console.log('Error connecting to data base!!!')
  }
})



app.get('/profile', (req, res) => {

  connection.query('SELECT * FROM `profiles` WHERE id=1', function(err, rows, fields) {

  if (err) throw err
    res.send(
      {
        id: rows[0].id,
        firstName: rows[0].first_name,
        lastName: rows[0].last_name,
        email: rows[0].email,
        password: rows[0].password
      }
    )
  })
})

// connection.end()
