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
      {data.map((singleData) => {
        return <SingleCard singleData={singleData} key={singleData.id} />;
      })}
    </>
  );
};

export default Card;
