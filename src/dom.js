import images from './images'

const dom = (() => {
    const container = document.querySelector('.main-content');
    let units;

    function renderToday(today, currentTime, location, description) {
        const headingDiv = document.createElement('div');
        const heading = document.createElement('h1');
        heading.textContent = location;
        const dateHeading = document.createElement('h3');
        dateHeading.className = 'light-grey small-text';
        dateHeading.textContent = `${currentTime.toDateString()} | ${currentTime.getHours() < 10 ? '0' + currentTime.getHours() : currentTime.getHours()}:${currentTime.getMinutes() < 10 ? '0' + currentTime.getMinutes() : currentTime.getMinutes()}`;
        headingDiv.appendChild(heading);
        headingDiv.appendChild(dateHeading);

        const weatherDiv = document.createElement('div');

        weatherDiv.className = 'flex';
        const tempContainer = document.createElement('div');
        const weatherImage = new Image();
        weatherImage.src = images.get(today.icon);
        weatherImage.alt = today.icon;
        weatherImage.className = 'large-weather-img';
        const text = document.createElement('span');
        text.className = 'large-temp-text';
        text.textContent = `${today.temp}\xB0${formatTempUnits()}`;
        tempContainer.appendChild(weatherImage);
        tempContainer.appendChild(text);

        const descriptionDiv = document.createElement('div');
        descriptionDiv.className = 'flex-column';
        const smallHeader = document.createElement('h3');
        smallHeader.className = 'medium-text';
        smallHeader.textContent = `${today.conditions}`;
        const feelsLikeText = document.createElement('span');
        feelsLikeText.className = 'light-grey small-text';
        feelsLikeText.textContent = `Feels like ${today.feelslike}\xB0${formatTempUnits()}`;
        descriptionDiv.appendChild(smallHeader);
        descriptionDiv.appendChild(feelsLikeText);

        weatherDiv.appendChild(tempContainer);
        weatherDiv.appendChild(descriptionDiv);

        const statsGrid = document.createElement('div');
        statsGrid.className = 'stats-grid';

        for (let [key, val] of Object.entries(today.stats)) {
            const name = formatDataName(key);

            const wrapper = document.createElement("div");

            const nameTag = document.createElement('span');
            nameTag.className = 'light-grey small-text';
            nameTag.textContent = name;

            wrapper.appendChild(nameTag);

            const infoBoxWrapper = document.createElement('div');
            infoBoxWrapper.className = 'info-box-wrapper';

            const infoBox = document.createElement('span');
            infoBox.className = 'medium-text info-box';
            infoBox.textContent = `${val}${getUnits(key) ? getUnits(key) : ''}`;

            if (key === 'uvindex') {
                infoBox.classList.add('circle');
                infoBox.style.backgroundColor = `${getUvColour(val)}`;
                infoBox.style.width = '35px';
                infoBox.style.height = '35px';
                infoBox.style.fontWeight = 'bold';
            }

            if (key === 'windspeed') {
                const windArrow = new Image();
                windArrow.src = images.get('arrow-up-thin');
                windArrow.alt = 'wind direction';
                windArrow.style.transform = `rotate(${today.winddir}deg)`;
                windArrow.className = 'wind-arrow';

                infoBoxWrapper.appendChild(windArrow);
            }

            infoBoxWrapper.appendChild(infoBox);
            wrapper.appendChild(infoBoxWrapper);

            statsGrid.appendChild(wrapper);
        }

        container.appendChild(headingDiv);
        container.appendChild(weatherDiv);
        container.appendChild(statsGrid);
    }

    function formatTempUnits() {
        switch (units) {
            case 'metric':
            case 'uk':
                return 'C';
            case 'us':
                return 'F';
        }
    }

    function getUnits(name) {
        let result;
        switch (name) {
            case 'windspeed':
                result = units === 'metric' ? 'km/h' : 'mph';
                break;
            case 'humidity':
            case 'cloudcover':
            case 'precipprob':
                result = '%';
                break;
            case 'visibility':
                result = units === 'metric' ? 'km' : 'mi';
                break;
        }
        return result;
    }

    function formatDataName(name) {
        let result;
        switch (name) {
            case 'windspeed':
                result = 'Wind';
                break;
            case 'humidity':
                result = 'Humidity';
                break;
            case 'uvindex':
                result = 'UV Index';
                break;
            case 'visibility':
                result = 'Visibility';
                break;
            case 'cloudcover':
                result = 'Cloudcover';
                break;
            case 'precipprob':
                result = 'Chance of rain';
                break;
            case 'sunrise':
                result = 'Sunrise';
                break;
            case 'sunset':
                result = 'Sunset';
                break;
        }
        return result;
    }

    function renderWeekly(days) {
        const wrapper = document.createElement('div');
        wrapper.className = 'bottom-wrapper';
        const heading = document.createElement('h1');
        heading.textContent = 'Weekly Forecast';

        const weekly = document.createElement('div');
        weekly.className = 'weekly';

        for (const day of days) {
            const dayContainer = document.createElement('div');
            dayContainer.className = 'day';

            const dayName = document.createElement('div');
            dayName.textContent = getDayOfWeek(day.datetime);

            const miniWeatherContainer = document.createElement('div');
            miniWeatherContainer.className = 'mini-weather-container';

            const weatherImage = new Image();
            weatherImage.src = images.get(day.icon);
            weatherImage.alt = 'weather-image';
            weatherImage.className = 'mini-weather-icon';
            const tempText = document.createElement('span');
            tempText.textContent = `${day.tempMax}\xB0${formatTempUnits()}`;

            miniWeatherContainer.appendChild(weatherImage);
            miniWeatherContainer.appendChild(tempText);

            const minTemp = document.createElement('span');
            minTemp.textContent = `${day.tempMin}\xB0${formatTempUnits()}`;
            minTemp.className = 'light-grey';

            const windContainer = document.createElement('div');
            windContainer.className = 'wind-container';

            const windArrow = new Image();
            windArrow.src = images.get('arrow-up-thin');
            windArrow.alt = 'wind direction';
            windArrow.style.transform = `rotate(${day.winddir}deg)`;
            windArrow.className = 'mini-wind-arrow';

            const windSpeed = document.createElement('span');
            windSpeed.textContent = `${day.windspeed}`;

            windContainer.appendChild(windArrow);
            windContainer.appendChild(windSpeed);

            dayContainer.appendChild(dayName);
            dayContainer.appendChild(miniWeatherContainer);
            dayContainer.appendChild(minTemp);
            dayContainer.appendChild(windContainer);

            weekly.appendChild(dayContainer);
        }

        wrapper.appendChild(weekly);
        container.appendChild(wrapper);
    }

    function getUvColour(uvindex) {
        if (uvindex >= 11) {
            return 'violet';
        } else if (uvindex >= 8) {
            return 'red';
        } else if (uvindex >= 6) {
            return 'orange';
        } else if (uvindex >= 3) {
            return 'gold';
        } else {
            return 'green';
        }
    }

    function getDayOfWeek(date) {
        switch (date.getDay()) {
            case 0:
                return 'Sunday';
            case 1:
                return 'Monday';
            case 2:
                return 'Tuesday';
            case 3:
                return 'Wednesday';
            case 4:
                return 'Thursday';
            case 5:
                return 'Friday';
            case 6:
                return 'Saturday';
        }
    }

    function renderContent(data, unit) {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        if (data.error) {
            alert(data.error);
        } else {
            units = unit;
            renderToday(data.days[0], data.currentTime, data.location, data.description);
            renderWeekly(data.days.splice(1), data.days.length - 1);
        }
    }

    function load() {
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        const loadingWheel = document.createElement('span');
        loadingWheel.className = 'loader';
        container.appendChild(loadingWheel);
    }

    return {
        renderContent,
        load,
    }
})();

export default dom;