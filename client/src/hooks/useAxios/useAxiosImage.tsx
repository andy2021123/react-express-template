import { useState, useEffect } from "react";
import api from "./api";

const useAxiosImage = (url: string) => {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await api.get(url, { responseType: "blob" });
        if (response.status === 200) {
          const imageObjectURL = URL.createObjectURL(response.data);
          setImageURL(imageObjectURL);
        } else {
          setError(true);
        }
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    })(); // eslint-disable-next-line
  }, []);

  return { imageURL, error, loading };
};

export default useAxiosImage;
