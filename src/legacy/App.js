import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Edong";
import Login from "./login";
import DiscTest from "./components/Banner";
import ResultType1 from "./ResultType1New";
import ResultType2 from "./ResultType2New";
import ResultType3 from "./ResultType3New";
import ResultType4 from "./ResultType4New";
import FinalResult from "./final";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<DiscTest />} />
        <Route path="/result/d" element={<ResultType1 />} />
        <Route path="/result/i" element={<ResultType2 />} />
        <Route path="/result/s" element={<ResultType3 />} />
        <Route path="/result/c" element={<ResultType4 />} />
        <Route path="/final" element={<FinalResult />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
