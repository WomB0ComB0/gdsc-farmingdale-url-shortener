import * as React from 'react'
import { Link } from '@/components/custom/Link';
import { Button } from '@/components/ui/button';
import { consentGranted, getCookieConsent } from '@/utils/cookies';

export const CookieConsent = function CookieConsent() {
  const [cookies, setCookies] = React.useState("unk");
  const [isMounted, setIsMounted] = React.useState(false);

  const d = new Date();
  const oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());

  const handleAccept = () => {
    setCookies("granted");
    document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/";
    consentGranted("granted");
  };

  const handleDecline = () => {
    setCookies("denied");
    document.cookie = "cookie-consent=denied; path=/";
  };

  React.useEffect(() => {
    setIsMounted(true);
    setCookies(getCookieConsent());
  }, []);

  return (
    <>
      {isMounted &&
        (
          <section
            id="cookie-banner"
            className={`${cookies === "granted" ? "hidden" : "block"
              } fixed left-0 bottom-0 right-0 z-50 m-2 max-w-screen-sm rounded-lg border-2 border-slate-300 bg-purple-50 text-slate-800 shadow-xl mx-auto transition-all duration-300 ease-in-out`}
          >
            <article className="p-4 text-center">
              <p className="mb-4 text-sm sm:text-base">
                We use cookies to analyze our website and make your experience even
                better. To learn more, see our{" "}
                <Link
                  className="text-blue-600 underline hover:text-blue-700"
                  to="/privacy"
                >
                  Privacy Policy.
                </Link>
              </p>

              <menu className="mx-auto">
                <Button
                  className="p-2 text-white transition bg-blue-600 rounded-md hover:bg-blue-700"
                  onClick={handleAccept}
                >
                  Accept
                </Button>
                <Button
                  className="p-2 ml-2 transition bg-transparent rounded-md text-slate-600 hover:bg-gray-200"
                  onClick={handleDecline}
                >
                  Decline
                </Button>
              </menu>
            </article>
          </section>
        )}
    </>
  );
};
