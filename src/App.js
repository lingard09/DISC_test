import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "./constants";
import Footer from "./components/common/Footer";

// Pages
import HomePage from "./pages/HomePage";
import NameInputPage from "./pages/NameInputPage";
import DiscTestPage from "./pages/DiscTestPage";
import ResultPage from "./pages/ResultPage";
import AllResultsPage from "./pages/AllResultsPage";

const AppContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
`;

const MainContent = styled.main`
  flex: 1;
`;

function App() {
  return (
    <BrowserRouter>
      <AppContainer>
        <MainContent>
          <Routes>
            <Route path={ROUTES.HOME} element={<HomePage />} />
            <Route path="/name" element={<NameInputPage />} />
            <Route path={ROUTES.TEST} element={<DiscTestPage />} />
            <Route path={ROUTES.RESULT} element={<ResultPage />} />
            <Route path={ROUTES.ALL_RESULTS} element={<AllResultsPage />} />
          </Routes>
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
