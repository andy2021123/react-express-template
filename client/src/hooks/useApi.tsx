import { AxiosResponse } from "axios";
import { useState, useRef, useEffect } from "react";

type Request<T> = () => Promise<AxiosResponse<T>>;

function useApi<T>(request: Request<T>) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);
  const controllerRef = useRef(new AbortController());
  const cancel = () => {
    controllerRef.current.abort();
  };

  useEffect(() => {
    (async () => {
      try {
        const response = await request();
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
}

export default useApi;
