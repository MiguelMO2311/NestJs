import Link from "next/link";
import PaginaProducto from "./components/PaginaProducto";

export default function Home() {
  return (
   <main>
    <h1>Bienvenido curso de Next Js</h1>
    <Link href="/users">Link a Usuarios</Link>
    <PaginaProducto/>
   </main>
     
  );
}
