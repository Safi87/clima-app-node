const axios = require('axios');

const getLugarLatLng = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const options = {
        method: 'GET',
        url: 'https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php',
        params: { location: `${encodedUrl}` },
        headers: {
            'x-rapidapi-key': '7533cf7a90mshb8c89ecc8dc0792p1d91fbjsn662aaba615a9',
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com'
        }
    };

    let rs = await axios.request(options);
    if (rs.data.Results === null || rs.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${dir}`);
    }

    const data = rs.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLatLng
}