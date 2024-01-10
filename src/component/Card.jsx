import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";

const Card = () => {
  // update data from fetch
  const [data, setData] = useState([]);

  // fetch from api
  useEffect(() => {
    const loadData = async () => {
      const value = await fetch(
        `https://openapi.programming-hero.com/api/ai/tools`
      );
      const res = await value.json();
      setData(res.data.tools);
    };
    loadData();
  }, []);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 my-5">
        {data.map((singleData) => {
          return <SingleCard singleData={singleData} key={singleData.id} />;
        })}
      </div>
    </>
  );
};

export default Card;
