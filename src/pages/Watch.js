import React, { useEffect,useState } from "react";
import { useParams } from "react-router";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";


export default function Watch() {
  const {name_en} =useParams();
  const[series,setSeries]=useState([]);

  //get all series from database
  const seriesRef = collection(db, "series");
  var serieslist = [];
  const getSeries = async () => {
  const data = await getDocs(seriesRef);
  const series = await data.docs.map((doc) => ({
    ...doc.data(),
    id: doc.id,
  }));
  serieslist = series.slice();
  
  return series;
};

useEffect(() => {
  getSeries().then((res) => {
    setSeries( [...res] );
  }).then(console.log(series))
},[]);

  return (
    <div>
      <iframe
        width="420"
        height="315"
        src="https://www.youtube.com/embed/It-d7yHqKOg"
      ></iframe>
    </div>
  );
}
