const api = (locales => {
    const apiKey = 'JSN83SWW77989S6ZE43SESMX2';
    let currentLocation;

    async function getLocationData(options, unit = 'metric') {
        if ('latitude' in options && 'longitude' in options) {
            const locationRequest = new Request(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${options.latitude}&longitude=${options.longitude}&localityLanguage=en`);
            try {
                const locationResponse = await fetch(locationRequest);
                const locationData = await locationResponse.json();
                options.location = `${locationData.city}, ${locationData.countryCode}`;
            } catch (error) {
                return {code: error.name, message: error.message};
            }
        }
        currentLocation = options.location;
        const request = new Request(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${options.location}?unitGroup=${unit}&key=${apiKey}&contentType=json&lang=en`, {
            method: 'GET',
            headers: {},
        });
        try {
            const response = await fetch(request);
            if (response.status >= 400) {
                const text = await response.text();
                return {
                    error: text
                }
            } else {
                const data = await response.json();
                return processData(data);
            }
        } catch (error) {
            return {code: error.name, message: error.message};
        }
    }

    function processData(data) {
        const currentTime = new Date(new Date().toLocaleString("en-US", {timeZone: `${data.timezone}`}));
        const location = data.resolvedAddress;
        const description = data.description;

        const daysData = data.days;

        const days = [];

        const todayData = daysData[0];
        days[0] = {
            conditions: todayData.conditions,
            temp: Math.round(todayData.temp),
            winddir: Math.round(todayData.winddir),
            feelslike: Math.round(todayData.feelslike),
            icon: todayData.icon,
            stats: {
                windspeed: Math.round(todayData.windspeed),
                humidity: Math.round(todayData.humidity),
                uvindex: todayData.uvindex,
                visibility: Math.round(todayData.visibility),
                cloudcover: Math.round(todayData.cloudcover),
                precipprob: Math.round(todayData.precipprob),
                sunrise: todayData.sunrise.slice(0, -3),
                sunset: todayData.sunset.slice(0, -3),
            },
            hours: todayData.hours,
        };

        for (let i = 1; i <= 7; i++) {
            const dayData = daysData[i];
            days[i] = {
                datetime: new Date(dayData.datetime),
                icon: dayData.icon,
                tempMin: Math.round(dayData.tempmin),
                tempMax: Math.round(dayData.tempmax),
                windspeed: Math.round(dayData.windspeed),
                winddir: Math.round(dayData.winddir),
            };
            if (i === 1) {
                days[i].hours = dayData.hours;
            }
        }
        return {
            currentTime,
            location,
            description,
            days,
        };
    }

    function getCurrentLocation() {
        return currentLocation;
    }

    return {
        getLocationData,
        getCurrentLocation
    }
})();


export default api