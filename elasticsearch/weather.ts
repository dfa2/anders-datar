const axios = require('axios');
const elasticsearch = require('elasticsearch')

interface WeatherData {
    referenceTime: string,
    // geometry: {},
    // timeSeries: []
}

axios.get('https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/16/lat/58/data.json')
    .then(function (response:WeatherData) {
	console.log(response.referenceTime);
    })


//console.log(data)

// axios.get('/user?ID=12345')
//   .then(function (response) {
//     // handle success
//     console.log(response);
//   })
//   .catch(function (error) {
//     // handle error
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });
