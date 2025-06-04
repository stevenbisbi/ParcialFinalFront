import { getAllUsers } from "../api";
import { getAllroles } from "../api";
import { useState, useEffect } from "react";

export function GeneralPage() {
  const [users, setUsers] = useState([]);
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersResponse = await getAllUsers();
        setUsers(usersResponse.data);

        const rolesResponse = await getAllroles();
        setRoles(rolesResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  console.log("Users:", users);

  return (
    <div className="container">
      <div>
        <h1>Usuarios:</h1>
        {users.length === 0 ? (
          <div className="no-data">No hay usuarios disponibles.</div>
        ) : (
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                {user.name}, {user.role}
              </li>
            ))}
          </ul>
        )}
      </div>
      <div>
        <h1>Roles Disponibles:</h1>
        {roles.length === 0 ? (
          <div className="no-data">No hay usuarios disponibles.</div>
        ) : (
          <ul>
            {roles.map((role) => (
              <li key={role.id}>{role.name}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
