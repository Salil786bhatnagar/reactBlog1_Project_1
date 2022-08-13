import React, { useState, useEffect } from "react";
export default function App() {
  const [getData, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts").then((result) => {
      result.json().then((resp) => {
        //    console.warn("result",resp);
        setData(resp);
      });
    });
  }, []);

  return (
    <div className="App">
      <table border="1">
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
        </tr>
        {getData.map((item) => {
          return (
            <tr>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
