import { Source_Sans_3 } from 'next/font/google'

import { getCssText } from '@/styles/stitches.config'
import { globalStyles } from '@/styles/global';

const source = Source_Sans_3({ subsets: ['latin'] })

export const metadata = {
  title: 'Formulário de Cartão',
  description: '',
}

globalStyles();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />
      </head>
      <body className={source.className}>{children}</body>
    </html>
  )
}
