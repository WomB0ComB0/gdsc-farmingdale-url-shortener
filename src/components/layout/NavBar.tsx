import React from 'react'
import { Link } from '../custom/Link'

export const NavBar: React.FC = () => {
  return (
    <nav
      className={`
        top-0 sticky z-50 flex items-center justify-between w-full px-4 h-14 
      `}
    >
      <article
        className={`
          flex items-center space-x-4
        `}
      >
        <picture
          className={`
          
          `}
        >
          <img 
            src=""
            alt=""
            fetchPriority={`low`}
            className={`

            `}
          />
          <source />
        </picture>
        <p
          className={`

          `}
        >

        </p>
      </article>
      <ul
        className={`
          flex items-center space-x-4
        `}
      >
        {[
          {
            href: "https://gdsc-fsc-l.web.app",
            text: "Links",
            icon: <i className="fa-solid fa-link"></i>
          },
        ].map(({ href, text, icon }: { href: string; text: string, icon: React.ReactNode }, index: number) => (
          <li key={index}>
            <Link 
              to={href}
              rel={`noreferrer noopener`}
              target={`_blank`}
              translate={`yes`}
              className={`

              `}
            >
              {icon}
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}