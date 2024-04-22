import { useState, useRef, useEffect } from 'react'
import api from './api'

const useAxios = (url, method, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await api.request({
          data: payload,
          signal: controllerRef.current.signal,
          method,
          url,
        });

        setData(response.data)
      } catch (error) {
        const message = error.response.data.message || error.message // use error message if none supplied
        setError(message)
      } finally {
        setLoading(false)
      }
    })(); // eslint-disable-next-line
  }, []);

  return { cancel, data, error, loading }
}

export default useAxios