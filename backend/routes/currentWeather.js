const router = require('express').Router();
const fetch = require('node-fetch');

router.route('/').get((req, res) => {

const apiKey = process.env.apiWeather;
const zipcode = process.env.localWeather;
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + zipcode + '&units=imperial&appid=' + apiKey;




fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
			res.send({ data });
		})
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
