import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
function App() {
  const allProducts = "https://fakestoreapi.com/products";
  const [data, setData] = useState([]);

  // Call API using Axios
  useEffect(() => {
    axios.get(allProducts).then((response) => setData(data));
  }, [data]);

  return (
    <div className="App">
      <div className="title-app">Shopping App</div>

      <div className="flexd">
        {data?.map((item) => (
          <div key={item.id} className="card">
            <p> {item?.title}</p>
            <p> {item?.description}</p>
            <div>
              <p>{item?.price}</p>
            </div>
            <img src={item?.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
