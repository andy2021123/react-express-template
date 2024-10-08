import { useState, useRef, useEffect } from "react";
import useAxiosImage from "./useAxiosImage";
import api from "./api";
import { Method } from "axios";

const useAxios = (url: string, method: Method, payload?: object) => {
  const [data, setData] = useState<any | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
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

        setData(response.data);
      } catch (error: any) {
        const message = error.response.data.message || error.message;
        setError(message);
      } finally {
        setLoading(false);
      }
    })(); // eslint-disable-next-line
  }, []);

  return { cancel, data, error, loading };
};

export { useAxiosImage };
export default useAxios;
