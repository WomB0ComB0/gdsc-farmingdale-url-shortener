import React from 'react'
import { HelmetProvider } from 'react-helmet-async'
import { ThemeProvider, Events, CookieConsent, ContextMenuProvider } from '@/components/providers'

export const Providers: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({
  children
}) => {
    return (
      <HelmetProvider>
        <ThemeProvider
          defaultTheme={`dark`}
          storageKey="vite-ui-theme"
        >
          <CookieConsent />
          <Events>
            <ContextMenuProvider>
              {children}
            </ContextMenuProvider>
          </Events>
        </ThemeProvider>
      </HelmetProvider>
    )
  }
