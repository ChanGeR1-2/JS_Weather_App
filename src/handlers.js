import api from './api';
import dom from './dom';

const handlers = (() => {
    const searchInput = document.querySelector('.search-bar input');
    const topNav = document.querySelector('.main-nav');

    async function load(input = "London", units = "metric") {
        const data = await api.getLocationData(input, units);
        dom.renderContent(data)
    }

    function clickHandler() {
        let input;
        let units = 'uk';
        topNav.addEventListener('click', async (e) => {
            const target = e.target;
            switch (target.id) {
                case 'search':
                    input = searchInput.value;
                    searchInput.value = '';
                    await load(input, units);
                    break;
            }
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
        clickHandler();
        keyHandler();
    }

    return {
        registerHandlers
    };
})();

export default handlers;