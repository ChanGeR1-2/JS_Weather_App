import api from './api';
import dom from './dom';

const handlers = (() => {
    const searchInput = document.querySelector('.search-bar input');
    const topNav = document.querySelector('.main-nav');

    async function load(latitude, longitude, input, units = "metric") {
        dom.load();
        const data = await api.getLocationData(latitude, longitude, input, units);
        dom.renderContent(data, units);
    }

    function navHandler() {
        let input = 'London';
        let units = 'metric';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    input = searchInput.value;
                    searchInput.value = '';
                    await load(undefined, undefined, input, units);
                    break;
            }
        });
        document.querySelectorAll('input[name="unit"]').forEach((element) => {
            element.addEventListener('change', async (e) => {
                units = e.target.value;
                await load(undefined, undefined, input, units);
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