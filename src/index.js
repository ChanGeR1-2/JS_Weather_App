import './style.css';
import handlers from "./handlers";

handlers.registerHandlers();
navigator.geolocation.getCurrentPosition( (position) => {
    handlers.load(`${position.coords.latitude}`, `${position.coords.longitude}`);
}, () => {
    handlers.load();
});
