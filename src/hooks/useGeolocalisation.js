import { useEffect, useState } from "react";

export default function useGeolocation() {
  const [coordinate, setCoordinate] = useState({});
  const [error, setError] = useState(null);

  const handleChange = ({ coords }) => {
    const { latitude, longitude } = coords;
    setCoordinate({ latitude, longitude });
  };

  const handleError = () => setError(true);

  useEffect(() => {
    const getLocation = () =>
      navigator.geolocation.getCurrentPosition(
        (position) => handleChange(position),
        () => handleError()
      );

    if ("geolocation" in navigator) {
      getLocation();
      setError(false);
    } else {
      setError(true);
    }
  }, []);
  //console.log(coordinate);
  return { coordinate, error };
}
