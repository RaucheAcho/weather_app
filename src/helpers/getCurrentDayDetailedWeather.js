const getCurrentDayDetailedWeather = (data) => [
  {
    name: "wind status",
    value: Math.round(data.wind_speed),
    unit: "mph",
  },
  {
    name: "humidity",
    value: data.humidity,
    unit: "%",
  },
  {
    name: "visibility",
    value: data.visibility,
    unit: "miles",
  },
  {
    name: "air pressure",
    value: data.air_pressure,
    unit: "mb",
  },
];

export default getCurrentDayDetailedWeather;
