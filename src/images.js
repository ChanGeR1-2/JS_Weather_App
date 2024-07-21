import clearDay from './images/clear-day.svg'
import clearNight from './images/clear-night.svg'
import cloudy from './images/cloudy.svg'
import fog from './images/fog.svg'
import arrowUpThin from './images/arrow-up-thin.svg'
import partlyCloudyDay from './images/partly-cloudy-day.svg'
import partlyCloudyNight from './images/partly-cloudy-night.svg'
import rain from './images/rain.svg'
import snow from './images/snow.svg'
import wind from './images/wind.svg'

const obj = {
    clearDay,
    clearNight,
    cloudy,
    fog,
    arrowUpThin,
    partlyCloudyDay,
    partlyCloudyNight,
    rain,
    snow,
    wind,
}

const kebabize = (str) => str.replace(/[A-Z]+(?![a-z])|[A-Z]/g, ($, ofs) => (ofs ? "-" : "") + $.toLowerCase())
const images = new Map();

for (let [key, val] of Object.entries(obj)) {
    images.set(kebabize(key), val);
}

export default images;