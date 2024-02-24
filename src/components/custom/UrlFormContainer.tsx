import React from 'react'
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card'

export const UrlFormContainer: React.FC<Readonly<{
  children: React.ReactNode
}>> = ({
  children
}) => {
  return (
    <Card>
      <>
        <CardHeader>
          <CardTitle>
            Shorten a URL
          </CardTitle>
        </CardHeader>
        <CardContent>
          {children}
        </CardContent>
      </>
    </Card>
  )
}
