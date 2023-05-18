import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import { Redirect, Route, Routes } from "react-router";

import Model from "../models/model.js";
import Main from "./Main";

function Fakestackoverflow() {
  const [data, setData] = useState(new Model().data);
  const [div, setDiv] = useState();
  useEffect(() => {
    console.log("123")
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      {/* <button > ask me</button> */}
      <Main {...data}></Main>
    </div>
  );
}

export default Fakestackoverflow;
