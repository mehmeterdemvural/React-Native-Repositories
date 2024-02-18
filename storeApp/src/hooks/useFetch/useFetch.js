import axios from 'axios';
import {useState, useEffect} from 'react';

const useFetch = url => {
  const [fetchData, setFetchData] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      await axios.get(url).then(res => {
        if (res.data) {
          setFetchData(res.data);
          setLoading(false);
        } else {
          reject();
        }
      });
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return {fetchData, loading, error};
};

export default useFetch;
