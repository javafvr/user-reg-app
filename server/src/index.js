//Добавим дополнительные плагины Express:
// - CORS (Для доступа к удаленным хостам),
// - morgan (Для ведения логов),
// - bodyParser (Для получения данных с Frontend)
// - config (Тут храним необходимые настройки сервера, такие как port,)

const 	express = require('express'),
		bodyParser = require('body-parser'),
		cors = require('cors'),
		morgan = require('morgan'),
		app = express(),
		config = require('./config/config')

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || config.port, 
	() => console.log(`Server start on port ${config.port} ...`));


app.get('/profile', (req, res) => {
	res.send(
		{
			id: "1",
			firstName: "Dmitrii",
			lastName: "Dolganov",
			email: "inet72@gmail.com",
			password: "123"
		}
	)
})