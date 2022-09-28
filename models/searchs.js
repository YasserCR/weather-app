const axios = require('axios');

class Searchs {

    history = ["Orizaba", "Calcahualco", "Coscomatepec"];

    constructor() {
        //TODO: read db if exists
    }

    paramsMapbox() {
        return {
            'access_token': process.env.MAPBOX_KEY,
            'limit': 5,
            'language': 'es'
        }
    }

    async city(place = '') {
        try {

            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${place}.json`,
                params: this.paramsMapbox()
            })

            const resp = await instance.get();
            console.log(resp.data);

            return [];
        } catch (error) {
            return [];
        }
    }
}

module.exports = Searchs;