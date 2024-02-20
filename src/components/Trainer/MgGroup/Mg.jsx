import { useState, useEffect } from 'react';
import axios from 'axios';

export const Mg = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get(import.meta.env.VITE_API_URL + '/api/mg', { withCredentials: true })
      .then((response) => {
        console.log(response)
        setData(response.data);
      })
      .catch((err) => {
        console.log(err)
      })
  }, []);

  return (
    <div>
      <div className="w-full h-fit min-h-[10rem] relative p-10 flex flex-col items-center justify-center border-4 border-light-secondary rounded-xl">
        {/* {data
        ? data.map((mg, idx) => {
          return (
            <div key={idx}>
              <p className="font-bold text-light-primary">{mg.name}</p>
              <p>{mg.content}</p>
            </div>
          )
        })
        : <p>Loading failed</p>} */}
      </div>
    </div>
  )
}