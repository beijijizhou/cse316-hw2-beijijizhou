import React,{useState,useEffect} from "react";
import LeftDiv from "./LeftDiv";
import MidDiv from "./MidDiv";
import RightDiv from "./RightDiv";
const OneDiv = (divinfo) => {
  const [data, setData] = useState();
  useEffect(()=>{
    setData()
  })
  
  return (
    <div id="dataDiv">
      <LeftDiv {...divinfo}></LeftDiv>
      <MidDiv {...divinfo}></MidDiv>
    <RightDiv {...divinfo}></RightDiv> 
    </div>
  );
};

export default OneDiv;
