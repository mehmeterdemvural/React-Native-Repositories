import {useState, useEffect} from 'react';
import axios from 'axios';

const useFetch = url => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(url)
      .then(res => {
        res.data.news.map((news, key) => {
          return (news.imageURL = `https://picsum.photos/id/${news.id}/1024/600`);
        });
        setData(res.data.news);
        setLoading(false);
      })
      .catch(err => {
        console.log(err);
        setLoading(false);
      });
  }, [url]);

  return {data, loading};
};

export default useFetch;
