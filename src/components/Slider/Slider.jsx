/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/prop-types */
import React from 'react';
import { sliderStyle, imgStyle } from './style';
import { getRandomNumber, getNextRoundRobin } from '../../lib/utils/math';
import { PUBLIC_IMAGE_FOLDER, DEFAULT_BANNER_IMAGE } from '../../configs/constants';

export class Slider extends React.Component {
  state = { index: 0 }

  path = '';

  componentDidMount() {
    const { duration, random, banners } = this.props;

    this.timerId = setInterval(() => {
      if (random) {
        this.setState({
          index: getRandomNumber(banners.length),
        });
      } else if (banners) {
        const { index } = this.state;
        this.setState({
          index: getNextRoundRobin(banners.length, index),
        });
      }
    }, duration);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const {
      altText,
      banners,
      defaultBanner,
      duration,
      height,
      random,
    } = this.props;
    console.log(banners, defaultBanner, duration, height, random);

    if (banners) {
      this.path = PUBLIC_IMAGE_FOLDER + banners[this.state.index];
    } else {
      this.path = DEFAULT_BANNER_IMAGE;
    }

    return (
      <div style={sliderStyle}>
        <img
          src={this.path}
          alt={altText}
          height={height}
          style={imgStyle}
        />
      </div>
    );
  }
}
