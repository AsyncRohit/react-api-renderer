import axios from "axios";
import React, { useState } from "react";

const App = () => {
  const [allData, setAllData] = useState([]);

  const dataHandler = async () => {
    const { data } = await axios.get("https://picsum.photos/v2/list");
    setAllData(data);
    console.log(data);
  };

  return (
    <div className="bg-white h-screen p-4 ">
      <button
        className="px-6 py-3 text-white bg-blue-400 rounded-md text-xl"
        onClick={() => {
          dataHandler();
        }}
      >
        Get Data
      </button>

      <div className="px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-gray-500 mt-2">
        {allData.map((elem, index) => {
          return (
            <div className="p-4 bg-gray-400 mr-2 mt-2 text-center overflow-hidden ">
              <img
              className="h-40 w-60  object-cover mx-auto"
                src={elem.download_url}
                alt=""
              />
              <h1 className="mt-2 font-semibold text-xl text-white">{elem.author}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
