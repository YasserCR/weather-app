require('dotenv').config();

const { readInput, inquirerMenu, pause, listPlaces } = require("./helpers/inquirer");
const Searches = require("./models/searches");

console.log(process.env.MAPBOX_KEY);

const main = async () => {

    const searches = new Searches();

    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:

                const term = await readInput('City: ');

                const places = await searches.city(term);

                const id = await listPlaces(places);
                if (id === '0') continue;

                const placeSelected = places.find(p => p.id === id);

                searches.addHistory(placeSelected.name);

                const weather = await searches.weatherPlace(placeSelected.lat, placeSelected.lng);

                console.clear();
                console.log('\n Info of the city\n'.green);
                console.log('City: ', placeSelected.name.green);
                console.log('Lat: ', placeSelected.lat);
                console.log('Lng: ', placeSelected.lng);
                console.log('Temperature: ', weather.temp);
                console.log('Min: ', weather.min);
                console.log('Max: ', weather.max);
                console.log('How is the weather: ', weather.desc.green);
                break;
            case 2:
                searches.historyCapitalized.forEach((place, i) => {
                    const idx = `${i + 1}.`.green;
                    console.log(`${idx} ${place}`);
                }
                )
                break;
        }

        if (opt !== 0) await pause();

    } while (opt !== 0);

};

main();