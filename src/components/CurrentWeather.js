import React, { Component } from 'react';
import WeatherIcon from './WeatherIcon';

// Assets
import LoadingIcon from '../assets/loading.svg';

class CurrentWeather extends Component {
    constructor(props) {
      super(props);

        this.state =({
          isLoading: true,
          date: '',
          time: '',
          tempF: '',
          tempC: '',
          tempMin: '',
          tempMax: '',
          feelsLike: '',
          humidity: '',
          wind: '',
          windDirection: '',
          currentCondition: '',
          currentConditionDescription: '',
          weatherIcon: '',
          cityName: '',
          cityNotFound: '',
        })
    }

    componentDidMount() {
      let options = { weekday: 'long', month: 'long', day:'numeric' };

      fetch('http://192.168.2.117:5000/current-weather')
      .then(res => res.json())
      .then(data => {
              if(data.data.cod === '404') {
                        this.setState({
                          isLoading: false,
                          cityNotFound: '404'
                        })
              } else {
                this.setState({
                    isLoading: false,
                    date: new Date().toLocaleString('en-US', options),
                    time: new Date().toLocaleTimeString('en-US'),
                    tempF: Math.round(data.data.main.temp) + '°F',
                    tempC: Math.round((data.data.main.temp - 32) * 5 / 9) + '°C',
                    tempMin: Math.round(data.data.main.temp_min) + '°F',
                    tempMax: Math.round(data.data.main.temp_max) + '°F',
                    feelsLike: Math.round(data.data.main.feels_like) +'°F',
                    humidity: data.data.main.humidity + '%',
                    wind: Math.round(data.data.wind.speed) + ' mph',
                    windDirection: data.data.wind.deg,
                    currentCondition: data.data.weather[0].main,
                    currentConditionDescription: data.data.weather[0].description,
                    weatherIcon: data.data.weather[0].id,
                    cityName: data.data.name
                  });
              }
      })
      .catch(err => {
        console.log(err);
      })
    }


  render() {
    console.log(this.state.weatherIcon);
    const WeatherConditions = (
          <div className='weatherCard container-fluid'>
            <div className='row conditionsDate'>
              <div className='col-12'>
                <p>{this.state.date}</p>
                <p>{this.state.time}</p>
              </div>
            </div>
            <div className='row conditionsOverview'>
              <div className='col-2'><WeatherIcon iconId={this.state.weatherIcon} /></div>
              <div className='col-2'><p>{this.state.tempF}</p></div>
              <div className='col-2'><p>{this.state.tempC}</p></div>
              <div className='col-6'><p>{this.state.currentConditionDescription}</p></div>
            </div>
            <div className='row conditionRange'>
              <div className='col-4'><p>Feels Like: {this.state.feelsLike}</p></div>
              <div className='col-4'><p>Min: {this.state.tempMin}</p></div>
              <div className='col-4'><p>Max: {this.state.tempMax}</p></div>
            </div>
            <div className='row conditionDetails'>
              <div className='col-6'><p>Humidity: {this.state.humidity}</p></div>
              <div className='col-6'><p>Wind Speed: {this.state.wind}</p></div>
            </div>
            <div className='row conditionLocation'>
              <div className='col-12'>
                <p>Location | {this.state.cityName}</p>
              </div>
            </div>
          </div>
    )

    const LoadingDisplay = (
      <div className='loading'>
        <img className='loadingIcon' src={LoadingIcon} alt='loading icon'/>
      </div>
    )

    const CurrentWeatherCard = (
      this.state.isLoading === true ? <div> {LoadingDisplay} </div> : <div> {WeatherConditions} </div>
    )

    return (

    <div>
      {CurrentWeatherCard}
    </div>
    )
  }
}

export default CurrentWeather;
