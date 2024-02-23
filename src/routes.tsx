import { BrowserRouter } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import { NotFound } from "../components/dom/index";

export const AppRoutes = function AppRoutes() {
  return (
    <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={`privacy`} element={<Privacy />} />
        <Route path={`terms`} element={<Terms />} />
        <Route path={`accessibility`} element={<Accessibility />} />
        <Route path={`cookies`} element={<Cookies />} />
        <Route path={`contact`} element={<Contact />} />
        <Route path={`*`}  element={<NotFound />}/>
    </Routes>
  )
}

const RootLayout: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({ children }) => {
  return (
    <>
      <NavBar />
      <main
        className={``}
      >
        {children}
      </main>
      <FooterBar />
    </>
  )
}

export function AppRouter(): JSX.Element {
  return (
    <Router>
      <RootLayout>
        <AppRoutes />
      </RootLayout>
    </Router>
  );
}

