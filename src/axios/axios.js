import axios from "axios";

const API_DOMAIN = "https://www.metaweather.com/api/location";
const CROSS_DOMAIN = "https://the-ultimate-api-challenge.herokuapp.com";
const REQUEST_URL = `${CROSS_DOMAIN}/${API_DOMAIN}`;

export default axios.create({
  baseURL: REQUEST_URL,
});
