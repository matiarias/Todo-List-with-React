import React from "react";
import "../tarea card/tareaCard.css";

const TareaCard = ({ item, id, tareas, setTareas, abrirFormEditTarea }) => {
  // ------------------------------- función para borrar tareas ------------------------------------

  const borrarTarea = (indice) => {
    const tareasPendientes = [...tareas];
    tareasPendientes.splice(indice, 1);
    setTareas(tareasPendientes);
  };

  // ------------------------------------------------------------------------------------------------

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center body-tareas">
          <span>{item}</span>

          <div>
            <button
              onClick={() => borrarTarea(id)}
              className="btn btn-secondary btn-sm me-2"
            >
              <i className="bi bi-trash3-fill"></i>
            </button>

            <button
              onClick={() => abrirFormEditTarea(item, tareas, id)}
              className="btn button-editar btn-sm"
            >
              <i className="bi bi-pencil-fill"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TareaCard;
