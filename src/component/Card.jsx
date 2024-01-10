import React, { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Button from "./Button";
import Modal from "./Modal";

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

  //   show all btn state handle
  const [showAll, setShowAll] = useState(false);

  const handaleShowAll = () => {
    setShowAll(true);
  };

  //   get uniq id from clicked item
  const [uniqId, setUniqId] = useState(null);

  const handleId = (id) => {
    setUniqId(id);
  };

  // get single data from api using id
  const [singleData, setSingleData] = useState({});

  useEffect(() => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqId}`)
      .then((res) => res.json())
      .then((data) => setSingleData(data.data));
  }, [uniqId]);
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mx-5 my-5">
        {data.slice(0, showAll ? 12 : 6).map((singleData) => {
          return (
            <SingleCard
              singleData={singleData}
              handleId={handleId}
              key={singleData.id}
            />
          );
        })}
      </div>
      {!showAll && (
        <span onClick={handaleShowAll}>
          <Button>Show All</Button>
        </span>
      )}

      {/* modal section  */}
      <Modal singleData={singleData} />
    </>
  );
};

export default Card;
