import React from "react";
import "../tarea card/tareaCard.css";

const TareaCard = ({ item, id, editarTareaBtn, task, setTask }) => {
  // ----------------- función para borrar tareas --------------------------

  const borrarTarea = (indice) => {
    const tareasPendientes = [...task];
    tareasPendientes.splice(indice, 1);
    setTask(tareasPendientes);
  };

  return (
    <div>
      <div className="card mb-3">
        <div className="card-body d-flex justify-content-between align-items-center">
          <span>{item}</span>

          <div>
            <button
              onClick={() => borrarTarea(id)}
              className="btn btn-secondary btn-sm me-2"
            >
              X
            </button>

            <button onClick={editarTareaBtn} className="btn btn-warning btn-sm">
              Editar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TareaCard;
