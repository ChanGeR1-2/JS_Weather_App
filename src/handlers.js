import api from './api';
import dom from './dom';

const handlers = (() => {
    const searchInput = document.querySelector('.search-bar input');
    const topNav = document.querySelector('.main-nav');
    let currentLocation = 'Edinburgh';

    async function load(options = {location: 'Edinburgh'}, units = "metric") {
        dom.load();
        const data = await api.getLocationData(options, units);
        currentLocation = api.getCurrentLocation();
        dom.renderContent(data, units);
    }

    function navHandler() {
        let units = 'metric';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    currentLocation = searchInput.value;
                    searchInput.value = '';
                    await load({location: currentLocation}, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load({location: currentLocation}, units);
            });
        });
    }

    function keyHandler() {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                document.querySelector('#search').click();
            }
        });
    }

    function loadHandler() {
        window.addEventListener('load', async () => {
            navigator.geolocation.getCurrentPosition( (position) => {
                load({latitude: `${position.coords.latitude}`, longitude: `${position.coords.longitude}`});
            }, () => {
                load();
            });
        });
    }

    function registerHandlers() {
        navHandler();
        keyHandler();
        loadHandler();
    }

    return {
        registerHandlers,
    };
})();

export default handlers;