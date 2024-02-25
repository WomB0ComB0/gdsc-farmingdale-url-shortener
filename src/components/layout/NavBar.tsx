import React from 'react'
import { Link } from '../custom/Link'
import { Link1Icon } from '@radix-ui/react-icons';

export const NavBar: React.FC = () => {
  return (
    <nav
      className={`
        top-0 sticky z-50 flex items-center justify-between w-full px-4 h-14 transition-all duration-300 ease-in-out bg-black bg-opacity-10 backdrop-filter backdrop-blur-[10px]
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
            src="/assets/svgs/logo.svg"
            alt=""
            fetchPriority={`low`}
            className={`
              w-10 h-10
            `}
          />
        </picture>
        <p
          className={`

          `}
        >
          <Link 
            to={`/`}
            className={`
              text-xl font-bold text-gray-500
            `}
          >
            {`GDSC Farmingdale`}
          </Link>
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
            icon: <Link1Icon className={`w-5 h-5`} />
          },
        ].map(({ href, text, icon }: { href: string; text: string, icon: React.ReactNode }, index: number) => (
          <li key={index}>
            <Link 
              to={href}
              rel={`noreferrer noopener`}
              target={`_blank`}
              translate={`yes`}
              className={`
                text-gray-500 transition hover:opacity-75 flex items-center gap-2
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