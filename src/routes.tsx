import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Loading, Fallback } from './screens'
import {
  App,
  Slug,
  Privacy,
  Terms,
  Accessibility,
  Cookies,
} from './pages';
import { NavBar, FooterBar } from './components';
import { Providers } from './providers/Providers';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useHasMounted } from './hooks/useHasMounted';

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path={`/`} element={<App />} />
        <Route path={`/:slug`} element={<Slug />} />
        <Route path={`privacy`} element={<Privacy />} />
        <Route path={`terms`} element={<Terms />} />
        <Route path={`accessibility`} element={<Accessibility />} />
        <Route path={`cookies`} element={<Cookies />} />
      <Route path={`*`} element={<NotFound />} />
    </Routes>
  )
}

const RootLayout: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({ children }) => {
  const isOnline = useOnlineStatus();
  const isLoading = useHasMounted();
  return (
    <Providers>
      <NavBar />
      <main
        className={`
        flex flex-col items-center justify-center w-full h-full min-h-[80dvh]
        `}
      >
        {isLoading ? <Loading /> : isOnline ? children : <Fallback />}
      </main>
      <FooterBar />
    </Providers>
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

