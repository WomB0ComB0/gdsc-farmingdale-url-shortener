import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link1Icon } from '@radix-ui/react-icons'
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import { Link } from '..'
import { NewsLetter } from './newsletter'
export const FooterBar: React.FC = () => {
  return (
    <footer className="bg-transparent text-white px-4 bg-gradient-to-b to-black/40 from-transparent w-full bottom-0 relative flex flex-row items-center justify-between">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8  ">
        <section className="lg:flex lg:items-start lg:gap-8">
          <picture className="text-teal-600">
            <img src="/assets/svgs/logo.svg" alt="GDSC Farmingdale" className="w-14 h-14 rounded-full" />
          </picture>

          <div className="mt-8  gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <section className="col-span-2">
              <article>
                <h2 className="text-2xl font-bold text-gray-900">Get the latest news!</h2>

                <p className="mt-4 text-gray-500">
                  Subscribe to our newsletter to get the latest news and updates from GDSC Farmingdale.
                </p>
              </article>
              <ul className=" justify-start gap-6 flex items-center mt-3">
                {[
                  { to: "https://gdsc-fsc-l.web.app", text: "Club links website", icon: <Link1Icon /> },
                  { to: "https://www.instagram.com/gdsc.farmingdale/", text: "Instagram", icon: <FontAwesomeIcon icon={faInstagram} /> },
                  { to: "https://github.com/GDSC-FSC", text: "GitHub", icon: <FontAwesomeIcon icon={faGithub} /> },
                  { to: "https://www.linkedin.com/groups/12917927/", text: "Linkedin", icon: <FontAwesomeIcon icon={faLinkedin} /> },
                ].map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.to}
                      rel="noreferrer noopener"
                      target="_blank"
                      className="text-gray-700 transition hover:opacity-75"
                    >
                      <span className="sr-only">{link.text}</span>
                      {link.icon}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          </div>
          <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
            <NewsLetter />
          </div>
        </section>
        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">&copy; 2024 GDSC Farmingdale. All rights reserved.</p>
            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              {[
                { to: "/terms", text: "Terms & Conditions" },
                { to: "/privacy", text: "Privacy Policy" },
                { to: "/cookies", text: "Cookies" },
                { to: "/accessibility", text: "Accessibility" },
              ].map((link, index) => (
                <li key={index}>
                  <Link to={link.to} className="text-gray-500 transition hover:opacity-75">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
