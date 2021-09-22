import moment from "moment";

const getCurrentDayWeather = (data, title) => ({
  weekday: moment(data.applicable_date).format("dddd"),
  date: moment(data.applicable_date).format("MMMM Do"),
  location: title,
  temperature: Math.round(data.the_temp),
  weatherIcon: data.weather_state_abbr,
  weatherDescription: data.weather_state_name,
});

export default getCurrentDayWeather;
