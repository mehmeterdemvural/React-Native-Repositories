import {useState} from 'react';
import axios from 'axios';

function usePost() {
  const [postData, setPostdata] = useState(null);
  const [postLoading, setPostLoading] = useState(false);
  const [postError, setPostError] = useState(false);

  const postUser = async (url, apiData) => {
    try {
      setPostLoading(true);
      await axios.post(url, apiData).then(res => {
 
        if (res.data) {
          setPostdata(res.data);
          setPostLoading(false);
        } else {
          reject();
        }
      });
    } catch (error) {
      setPostError(true);
      setPostLoading(false);
    }
  };
  return {postData, postLoading, postError, postUser};
}

export default usePost;
