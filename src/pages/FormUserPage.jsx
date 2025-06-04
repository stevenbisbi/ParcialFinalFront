import { useEffect, useState } from "react";
import { createUser, getAllroles } from "../api";
import { useNavigate } from "react-router-dom";

export function FormUserPage() {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    dni: "",
    email: "",
    roleId: "",
  });

  const [roles, setRoles] = useState([]);

  const onSubmit = async (event) => {
    console.log("onSubmit", userData);
    event.preventDefault();
    const payload = {
      ...userData,
      roleId: Number(userData.roleId),
    };
    try {
      await createUser(payload);
      navigate("/");
    } catch (error) {
      console.error(
        "Error al crear usuario:",
        error.response?.data || error.message
      );
    }
    navigate("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const rolesResponse = await getAllroles();
        setRoles(rolesResponse.data);
      } catch (error) {
        console.error("Error fetching roles:", error);
      }
    };
    fetchRoles();
  }, []);

  return (
    <div className="container">
      <h1>Formulario de Usuario</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="firstName">Nombre:</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={userData.firstName}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Apellido:</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={userData.lastName}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dni">DNI:</label>
          <input
            type="text"
            id="dni"
            name="dni"
            value={userData.dni}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="roleId">Rol:</label>
          <select
            id="roleId"
            name="roleId"
            value={userData.roleId}
            onChange={onChange}
            required
          >
            <option value="" disabled>
              -- Selecciona un rol --
            </option>
            {roles.map((role) => (
              <option key={role.id} value={role.id}>
                {role.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Crear Usuario</button>
      </form>
    </div>
  );
}
