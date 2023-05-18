import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FakeStackOverflow from './test/newstackoverflow';
import NewQuestion from "./test/NewQuestion"
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
ReactDOM.render(
  <NewQuestion />,
  document.getElementById('root')
  
);


