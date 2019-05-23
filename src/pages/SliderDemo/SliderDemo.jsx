/* eslint-disable react/require-render-return */
/* eslint-disable no-useless-constructor */
import React from 'react';
import { Slider } from '../../components';


export class SliderDemo extends React.Component {
  images = [
    'cloud.jpg',
    'dns-server.png',
    'full-stack-web-development.jpg',
    'js.jpg',
    'load-balancer.png',
  ];

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Slider
        altText="Default Banner"
        banners={this.images}
        defaultBanner="default.png"
        duration="2000"
        height="200"
        random
      />
    );
  }
}
