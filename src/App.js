import "./styles.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

const pinAip = "https://api.postalpincode.in/pincode/";

export default function App() {
  const [pin, setPin] = useState("");
  useEffect(() => {
    const debouncing = setTimeout(() => {
      axios
        .get(pinAip + pin)
        .then((res) => {
          console.log(res.data[0].PostOffice);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 2000);
    return () => {
      clearTimeout(debouncing);
    };
  }, [pin]);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input
        placeholder="Enter Pin Code Number "
        onChange={(event) => setPin(event.target.value)}
      />
    </div>
  );
}
