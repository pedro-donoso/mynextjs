import Link from "next/link";

export const metadata = {
  title: "Tienda oficial"
};

export default function TiendaLayout({ children }) {
  return (
    <div>
      <nav>
        <h3>Sección Tienda</h3>
        <ul>
        <li>
            <Link href='/posts/'>Productos</Link>
          </li>
          <li>
            <Link href='/tienda/categorias/'>Categorías</Link>
          </li>
          <li>
            <Link href='/tienda/categorias/computadoras/'>Computadoras</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}
