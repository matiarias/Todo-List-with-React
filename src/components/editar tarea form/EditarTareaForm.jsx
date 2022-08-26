import React, { useEffect } from "react";
import { useState } from "react";
import "../editar tarea form/editarTareaForm.css";
import { Toaster, toast } from "react-hot-toast";

const EditarTareaForm = ({ itemEdit, tareas, setTareas, setModoEditTarea }) => {
  const [inputEditTarea, setInputEditTarea] = useState({ ...itemEdit });

  // ----------------- funcion para manejar el input para editar tarea ------------------------------

  const handleChangeEditTarea = ({ target }) => {
    setInputEditTarea((prev) => {
      return {
        ...prev,
        tarea: target.value,
      };
    });
    // console.log(inputEditTarea);
  };

  // ------------------------ alerta react toast para la tarea editada -----------------------------

  const toastTareaEditada = () => {
    toast.success("Tarea editada!", {
      position: "top-center",
      duration: 3000,
      reverseOrder: "true",
      iconTheme: {
        primary: "#cecece",
        secondary: "#FFFAEE",
      },

      style: {
        borderRadius: "10px",
        background: "#89ab11",
        color: "#fff",
      },
    });
  };

  // ---------------------------- función para agregar la tarea editada -----------------------------

  const handleSubmitEditTarea = (e) => {
    e.preventDefault();
    toastTareaEditada();
    setTareas((prev) => {
      prev[inputEditTarea.id] = inputEditTarea.tarea;

      return prev;
    });
    console.log(tareas);
    setModoEditTarea(false);
  };

  // ------------------------- función para cerrar el modo editar tarea ------------------------------

  const cerrarModoEditar = () => {
    setModoEditTarea(false);
  };

  // -------------------------------------------------------------------------------------------------

  return (
    <>
      <div className="card">
        <div className="card-body card-editar">
          <h4 className="text-center title-editar-tarea">Edita tu tarea</h4>
          <button
            onClick={cerrarModoEditar}
            className="btn btn-sm text-end button-close-editar"
          >
            <i className="bi bi-x-lg icon-close-edit"></i>
          </button>
          <div className="d-flex">
            <div className="w-100 me-3">
              <form onSubmit={handleSubmitEditTarea}>
                <input
                  type="text"
                  maxLength="25"
                  className="form-control form-editar-tarea"
                  value={inputEditTarea.tarea}
                  onChange={handleChangeEditTarea}
                  autoFocus
                />
              </form>
            </div>

            <button
              onClick={handleSubmitEditTarea}
              type="submit"
              className="btn - button-guardar-tarea-editada btn-sm"
            >
              Guardar
            </button>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default EditarTareaForm;
