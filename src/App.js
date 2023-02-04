import { useState, useEffect } from "react";
import "./App.css";
import Info from "./components/Info";

function App() {
  const [info, setinfo] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setinfo(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {info.map((res, i) => (
        <Info
          key={i}
          name={res.name}
          username={res.username}
          email={res.email}
          address={res.address}
          phone={res.phone}
          website={res.website}
          company={res.company}
        />
      ))}
    </div>
  );
}

export default App;
