import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export default function Watch() {
  const { name_en } = useParams();
  const [series, setSeries] = useState([]);

  //get all series from database
  const seriesRef = collection(db, "series");
  const getSeries = async () => {
    const data = await getDocs(seriesRef);
    const series = await data.docs.map((doc) => ({
      ...doc.data(),
    }));
    return series;
  };

  useEffect(() => {
    getSeries().then((res) => {
      setSeries([...res]);
    });
  }, []);

  return (
    <div>
      <iframe
        width="420"
        height="315"
        src={"https://www.youtube.com/embed/" + series[2].ep_links[0]} //It-d7yHqKOg
      ></iframe>
    </div>
  );
}
