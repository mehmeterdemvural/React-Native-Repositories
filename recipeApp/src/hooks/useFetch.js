import {useEffect, useState} from 'react';
import axios from 'axios';

function useFetch(url) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [fetchData, setFetchData] = useState();

  useEffect(() => {
    fetchDatas();
  }, []);

  const fetchDatas = async () => {
    try {
      await axios.get(url).then(res => {
        if (res.data) {
          setFetchData(res.data);
          setLoading(false);
        } else {
          reject();
        }
      });
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return {loading, error, fetchData};
}
export default useFetch;
