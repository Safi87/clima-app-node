const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        descripcion: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

/*lugar.getLugarLatLng(argv.direccion)
    .then(console.log())*/

// clima.getClima(35, 139)
//     .then(console.log)
//     .catch(console.log);


const getInfo = async(lat, lng) => {

    try {
        //const coords = await lugar.getLugarLatLng(direccion);
        const coords = {
            direccion: 'Sitio raro',
            lat,
            lng
        }
        console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.`;
    } catch (e) {
        return "No se pudo determinar el clima.";
    }

};

let lat = 35;
let lng = 139;
getInfo(lat, lng)
    .then(console.log)
    .catch(console.log);