import Navbar from '../components/Navbar';

export const metadata = {
  title: "Mi App con Nextjs",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
       <Navbar />
        {children}
        </body>
    </html>
  );
}
