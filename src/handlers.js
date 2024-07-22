import api from './api';
import dom from './dom';

const handlers = (() => {
    const searchInput = document.querySelector('.search-bar input');
    const topNav = document.querySelector('.main-nav');
    let currentLocation = 'Edinburgh';

    async function load(latitude, longitude, input = 'Edinburgh', units = "metric") {
        dom.load();
        const data = await api.getLocationData(latitude, longitude, input, units);
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
                    await load(undefined, undefined, currentLocation, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load(undefined, undefined, currentLocation, units);
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

    function registerHandlers() {
        navHandler();
        keyHandler();
    }

    return {
        registerHandlers,
        load,
    };
})();

export default handlers;