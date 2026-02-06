import '../../lib/fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';

const linkPages = [
    { name: 'A propos', href: '/#about' },
    { name: 'Projects', href: '/projets' },
    { name: 'Me Contacter', href: '/#contact' },
];

export const metadata = {
  title: 'Mon Portfolio | Vincent Gillet',
  description: 'Portfolio de développeur full stack, présentant mes compétences, mes projets et mon parcours professionnel. Découvrez mes réalisations en React, Node.js, et plus encore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
        <head>
            <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://kit.fontawesome.com/61d2b3ef85.js" crossOrigin="anonymous"/>
        </head>

      <body>
        <div id="root">
          <Header linkPages={linkPages} />
          {children}
          <Footer linkPages={linkPages} />          
        </div>
      </body>
    </html>
  )
}
