export function NavBar() {
  return (
    <nav>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="text-blue-500 hover:underline">
            Inicio
          </a>
        </li>
        <li>
          <a href="/form-role" className="text-blue-500 hover:underline">
            Crear Rol
          </a>
        </li>
        <li>
          <a href="/form-user" className="text-blue-500 hover:underline">
            Crear Usuario
          </a>
        </li>
      </ul>
    </nav>
  );
}
