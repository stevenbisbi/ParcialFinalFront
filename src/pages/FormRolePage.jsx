import { createRole } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function FormRolePage() {
  const navigate = useNavigate();
  const [roleData, setRoleData] = useState({
    name: "",
    description: "",
  });

  const onSubmit = async (event) => {
    event.preventDefault();
    await createRole(roleData);
    navigate("/");
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setRoleData({
      ...roleData,
      [name]: value,
    });
  };
  return (
    <div className="container">
      <h1>Formulario de Rol</h1>
      <form>
        <div>
          <label htmlFor="name">Nombre del Rol:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={roleData.name}
            onChange={onChange}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Descripción del Rol:</label>
          <input
            type="text"
            id="description"
            name="description"
            onChange={onChange}
            value={roleData.description}
            required
          />
        </div>
        <button type="submit" onClick={onSubmit}>
          Crear Rol
        </button>
      </form>
    </div>
  );
}
