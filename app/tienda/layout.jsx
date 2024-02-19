import Link from "next/link";

export const metadata = {
  title: "Tienda oficial"
};

export default function TiendaLayout({ children }) {
  return (
    <div className="p-4 bg-indigo-300">
    <nav className="mb-4">
        <h3 className="text-lg font-bold mb-2 text-gray-950">Sección Tienda</h3>
        <ul className="flex space-x-4">
            <li>
                <Link href="/posts/" className="text-gray-950 hover:text-blue-700">Posts</Link>
            </li>
            <li>
                <Link href="/tienda/categorias/" className="text-gray-950 hover:text-blue-700">Categorías</Link>
            </li>
            <li>
                <Link href="/tienda/categorias/computadoras/" className="text-gray-950 hover:text-blue-700">Computadoras</Link>
            </li>
        </ul>
    </nav>
    {children}
</div>

  );
}
