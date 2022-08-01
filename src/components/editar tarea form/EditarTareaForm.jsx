import React from "react";
import { useState } from "react";
import "../editar tarea form/editarTareaForm.css";
import { Toaster, toast } from "react-hot-toast";

const EditarTareaForm = ({ task, setTask, setModoEdit }) => {
  const [editInput, setEditInput] = useState("");

  const handleChangeEdit = ({ target }) => {
    setEditInput(target.value);
    console.log(target.value);
  };

  const editTask = () => {
    console.log(task);
  };

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

  const submitEdit = (e) => {
    e.preventDefault();
    editTask();
    setEditInput("");
    setModoEdit(false);
    toastTareaEditada();
  };

  const closeFormEditar = () => {
    setModoEdit(false);
  };
  return (
    <>
      <div className="card">
        <div className="card-body card-editar">
          <h4 className="text-center title-editar-tarea">Edita tu tarea</h4>
          <button
            onClick={closeFormEditar}
            className="btn btn-sm text-end button-close-editar"
          >
            <i className="bi bi-x-octagon icon-close-edit"></i>
          </button>
          <div className="d-flex">
            <div className="w-100 me-3">
              <form onSubmit={submitEdit}>
                <input
                  type="text"
                  maxLength="25"
                  className="form-control form-editar-tarea"
                  value={editInput}
                  onChange={handleChangeEdit}
                  autoFocus
                />
              </form>
            </div>

            <button
              onClick={submitEdit}
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
