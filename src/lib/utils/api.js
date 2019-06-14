/* eslint-disable no-return-await */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */
/* eslint-disable react/no-unused-state */
import axios from 'axios';
import { configenv } from '../../configs/environment';

const callApi = async userDetails => await axios.post(
  configenv.REACT_APP_URL
  + configenv.REACT_APP_LOGIN,
  userDetails,
);

export default callApi;
