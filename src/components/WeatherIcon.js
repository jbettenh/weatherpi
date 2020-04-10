import React, { Component } from 'react';

import { WiDaySunny } from 'weather-icons-react';
import { WiCloudy } from 'weather-icons-react';
import { WiShowers } from 'weather-icons-react';
import { WiRain } from 'weather-icons-react';
import { WiThunderstorm } from 'weather-icons-react';
import { WiSnow } from 'weather-icons-react';
import { WiTrain } from 'weather-icons-react';


class WeatherIcon extends Component {
    render() {
      if(this.props.iconId <= 232) {
        return <WiThunderstorm size={150} color='#FFF' />
      } else if(this.props.iconId >= 300 && this.props.iconId <= 531) {
        return <WiRain size={150} color='#FFF' />
      } else if(this.props.iconId >= 600 && this.props.iconId <= 622) {
        return <WiSnow size={150} color='#FFF' />
      } else if(this.props.iconId === 800) {
        return <WiDaySunny size={150} color='#FFF' />
      } else if(this.props.iconId >= 801 && this.props.iconId <= 804) {
        return <WiCloudy size={150} color='#FFF' />
      } else {
        return <WiTrain size={150} color='#F00' />
      }
  }
}

export default WeatherIcon;
