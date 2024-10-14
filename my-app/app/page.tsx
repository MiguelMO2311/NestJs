import React from "react";
interface Usuario {
  id: number;
  name: string;
}
const PaginaUsuarios = async () => {
  const res = await fetch
  ('https://jsonplaceholder.typicode.com/users',
   {next:{revalidate:20}}) 

  const usuarios: Usuario[] = await res.json();
  
  return (
    <>
      <h1>Usuarios</h1>
      <h2>{new Date().toLocaleTimeString()}
      </h2>
      <ul>
        {usuarios.map(usuario => <li key=
          {usuario.id}>{usuario.name}</li>)}
      </ul>
    </>
  )
}
export default PaginaUsuarios