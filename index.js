require('dotenv').config();

const { readInput, inquirerMenu, pause } = require("./helpers/inquirer");
const Searchs = require("./models/searchs");

console.log(process.env.MAPBOX_KEY);

const main = async () => {

    const searchs = new Searchs();

    let opt;

    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const place = await readInput('City: ');
                await searchs.city(place);
                console.log(place);
                //show message
                //search place
                //select the place
                //weather data
                console.log('\n Info of the city\n'.green);
                console.log('City: ');
                console.log('Lat: ');
                console.log('Lng: ');
                console.log('Temperature: ');
                console.log('Min: ');
                console.log('Max: ');
                break;
            case 2:
        }

        if (opt !== 0) await pause();

    } while (opt !== 0);

};

main();