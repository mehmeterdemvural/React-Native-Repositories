import {useState} from 'react';
import axios from 'axios';

function useFetch() {
  const [fetchData, setFetchData] = useState();
  const [fetchLoading, setFetchLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);

  const workFetch = async url => {
    try {
      setFetchLoading(true);
      await axios.get(url).then(res => {
        if (res.data) {
          setFetchData(res.data);
        } else {
          reject();
        }
        setFetchLoading(false);
      });
    } catch (err) {
      setFetchError(true);
      setFetchLoading(false);
    }
  };

  return {fetchData, fetchError, fetchLoading, workFetch};
}
export default useFetch;
