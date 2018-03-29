import React, {Component} from 'react';
// components
import Titles from './components/titles'
import Form from './components/form'
import Weather from './components/weather'

// API key
const API_KEY = "254f85791b212762d15a748364ae6454";

class App extends Component {

    state = {
        temperatureData: {
            temperature: undefined,
            max_temperature: undefined,
            min_temperature: undefined,
            city: undefined,
            sunrise: undefined,
            sunset: undefined,
            country: undefined,
            humidity: undefined,
            weather_condition: undefined,
            description: undefined,
            icon: undefined,
            wind_speed: undefined,
            error: undefined
        }
    };

    getWeather = async (e) => {
        e.preventDefault();
        const city = e.target.elements.city.value;
        const country = e.target.elements.country.value;

        const API_CALL = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
        const data = await API_CALL.json();

        if (city && country && data.cod !== "404") {
            let sunrise_utc = data.sys.sunrise;
            let sunrise = new Date(0);
            let sunset_utc = data.sys.sunset;
            let sunset = new Date(0);

            sunrise.setUTCSeconds(sunrise_utc);
            sunset.setUTCSeconds(sunset_utc);

            this.setState({
                temperatureData: {
                    temperature: data.main.temp,
                    max_temperature: data.main.temp_max,
                    min_temperature: data.main.temp_min,
                    city: data.name,
                    sunrise: sunrise,
                    sunset: sunset,
                    country: data.sys.country,
                    humidity: data.main.humidity,
                    weather_condition: data.weather[0].main,
                    description: data.weather[0].description,
                    icon: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
                    wind_speed: data.wind.speed
                }
            });
        } else if (city && country && data.message === "city not found" && data.cod === "404") {
            this.setState({
                temperatureData: {
                    error: "Please fill the fields with valid City and Country values."
                }
            });
        } else {
            this.setState({
                temperatureData: {
                    error: "Please fill out all fields."
                }
            })
        }
    };

    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="main">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-5 title-container">
                                    <Titles/>
                                </div>
                                <div className="col-md-7 form-container">
                                    <Form getWeather={this.getWeather}/>
                                    <Weather temperatureData={this.state.temperatureData}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;