import {useState, useEffect, useCallback} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    try {
      const {data: response} = await axios(url);
      setData(response);
      setLoading(false);
    } catch (err) {
      setError(err);
      console.error('Error fetching data', err);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {data, loading, error};
};

export default useFetch;
