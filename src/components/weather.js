import React from 'react';

const Weather = (props) => {
    const weather = props.temperatureData;

    function getHour(api_date) {
        function addZero(i) {
            if (i < 10)
                i = "0" + i;

            return i;
        }

        let date = new Date(api_date);
        let h = addZero(date.getHours());
        let m = addZero(date.getMinutes());
        return h + ":" + m + " h.";
    }

    return (
        <div>
            <div className="weather__info">
                {weather.city && weather.country && <div className="weather__key"> Location:
                    <span className="weather__value"> {weather.city}, {weather.country}</span>
                </div>}
                {weather.temperature && <div className="weather__key"> Temperature:
                    <span className="weather__value"> {weather.temperature}°C</span>
                </div>}
                {weather.max_temperature && <div className="weather__key"> Max. temperature:
                    <span className="weather__value"> {weather.max_temperature}°C</span>
                </div>}
                {weather.min_temperature && <div className="weather__key"> Min. temperature:
                    <span className="weather__value"> {weather.min_temperature}°C</span>
                </div>}
                {weather.sunrise && <div className="weather__key"> Sunrise time:
                    <span className="weather__value"> {getHour(weather.sunrise)}</span>
                </div>}
                {weather.sunset && <div className="weather__key"> Sunset time:
                    <span className="weather__value"> {getHour(weather.sunset)}</span>
                </div>}
                {weather.humidity && <div className="weather__key"> Humidity:
                    <span className="weather__value"> {weather.humidity}</span>
                </div>}
                {weather.weather_condition && weather.description && weather.icon && <div className="weather__key"> Condition:
                    <span className="weather__value"><br/><img src={weather.icon} alt=""/>{weather.weather_condition}, {weather.description}</span>
                </div>}
                {weather.wind_speed && <div  className="weather__key"> Wind speed:
                    <span className="weather__value"> {weather.wind_speed} Km/h</span>
                </div>}
                {weather.error && <div className="weather__error">
                    {weather.error}
                </div>}
            </div>
        </div>
    );
};

export default Weather;