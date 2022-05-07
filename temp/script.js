/*const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));
*/

const axios = require("axios").default;

const BASE_URL = "https://restaurant-api.wolt.com/v1/pages/restaurants";
const VERSION = "v1";
const SECTION = "pages";
const TYPE = "restaurants";
const LAT = "lat";
const LON = "lon";
const EXAMP_CORDS = [32.05784169999998, 34.825958000000014];

axios
  .get(`${BASE_URL}?${LAT}=${EXAMP_CORDS[0]}&${LON}=${EXAMP_CORDS[1]}`)
  .then((res) => analyze(res.data));

const analyze = (data) => {
  console.log(JSON.stringify(data.sections[0].items[0], 2, 2));
};
