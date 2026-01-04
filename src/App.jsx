import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { ROUTES } from "./constants/index.jsx";
import Footer from "./components/common/Footer.jsx";
import LoadingSpinner from "./components/common/LoadingSpinner.jsx";

// Lazy load pages
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NameInputPage = lazy(() => import("./pages/NameInputPage.jsx"));
const DiscTestPage = lazy(() => import("./pages/DiscTestPage.jsx"));
const ResultPage = lazy(() => import("./pages/ResultPage.jsx"));
const AllResultsPage = lazy(() => import("./pages/AllResultsPage.jsx"));
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
          <Suspense fallback={<LoadingSpinner message="페이지 로딩 중..." />}>
            <Routes>
              <Route path={ROUTES.HOME} element={<HomePage />} />
              <Route path="/name" element={<NameInputPage />} />
              <Route path={ROUTES.TEST} element={<DiscTestPage />} />
              <Route path={ROUTES.RESULT} element={<ResultPage />} />
              <Route path={ROUTES.ALL_RESULTS} element={<AllResultsPage />} />
            </Routes>
          </Suspense>
        </MainContent>
        <Footer />
      </AppContainer>
    </BrowserRouter>
  );
}

export default App;
