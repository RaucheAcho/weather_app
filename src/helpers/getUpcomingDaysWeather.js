import moment from "moment";

const getWeekday = (date) => moment(date).format("dddd");

const getUpcomingDaysWeather = (data) =>
  data.slice(1).map((day) => ({
    imgUrl: day.weather_state_abbr,
    temperatureMax: Math.round(day.max_temp),
    temperatureMin: Math.round(day.min_temp),
    weekday: getWeekday(day.applicable_date),
  }));

export default getUpcomingDaysWeather;
