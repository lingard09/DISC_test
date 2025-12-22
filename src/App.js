import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants";

// Pages
import HomePage from "./pages/HomePage";
import NameInputPage from "./pages/NameInputPage";
import DiscTestPage from "./pages/DiscTestPage";
import ResultPage from "./pages/ResultPage";
import AllResultsPage from "./pages/AllResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<HomePage />} />
        <Route path="/name" element={<NameInputPage />} />
        <Route path={ROUTES.TEST} element={<DiscTestPage />} />
        <Route path={ROUTES.RESULT} element={<ResultPage />} />
        <Route path={ROUTES.ALL_RESULTS} element={<AllResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
