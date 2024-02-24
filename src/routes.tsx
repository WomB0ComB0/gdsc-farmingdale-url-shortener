import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NotFound, Loading, Fallback } from './screens'
import {
  App,
  Slug,
  Privacy,
  Terms,
  Accessibility,
  Cookies,
  Contact
} from './pages';
import { NavBar, FooterBar } from './components';
import { Providers } from './providers/Providers';
import { useOnlineStatus } from './hooks/useOnlineStatus';
import { useHasMounted } from './hooks/useHasMounted';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route index path={`/`} element={<App />} />
      <Route path={`/:slug`} element={<Slug />} />
      <Route path={`privacy`} element={<Privacy />} />
      <Route path={`terms`} element={<Terms />} />
      <Route path={`accessibility`} element={<Accessibility />} />
      <Route path={`cookies`} element={<Cookies />} />
      <Route path={`contact`} element={<Contact />} />
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
        className={``}
      >
        {isLoading && <Loading />}
        {isOnline && children}
        {!isOnline && <Fallback />}
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

