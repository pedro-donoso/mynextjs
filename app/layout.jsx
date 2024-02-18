import Navbar from '@/Navbar';
import { Roboto } from "next/font/google"

export const metadata = {
  title: "Mi App con Nextjs",
  description: "Esta es la página principal de mi tienda",
  keywords: "tienda, online, ecommerce"
}

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  style: ["italic", "normal"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={roboto.className}>
       <Navbar />
        {children}
        </body>
    </html>
  );
}
