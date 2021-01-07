const axios = require('axios');

const getClima = async(lat, lng) => {

    let rs = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=8d636ffbfbb186d167b7c685e0153e8a&units=metric`);

    return rs.data.main.temp;

}

module.exports = {
    getClima
}