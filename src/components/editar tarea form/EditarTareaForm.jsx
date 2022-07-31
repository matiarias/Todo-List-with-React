import React from "react";
import { useState } from "react";
import "../editar tarea form/editarTareaForm.css";

const EditarTareaForm = ({ task, setTask, setModoEdit }) => {
  const [editInput, setEditInput] = useState("");

  const handleChangeEdit = ({ target }) => {
    setEditInput(target.value);
    console.log(target.value);
  };

  const editTask = () => {
    console.log(task);
  };

  const submitEdit = (e) => {
    e.preventDefault();
    editTask();
    setEditInput("");
    setModoEdit(false);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="text-center">Edita tu tarea</h4>
        <div className="d-flex">
          <div className="w-100 me-3">
            <form onSubmit={submitEdit}>
              <input
                type="text"
                maxLength="25"
                className="form-control"
                value={editInput}
                onChange={handleChangeEdit}
                autoFocus
              />
            </form>
          </div>

          <button onClick={submitEdit} className="btn - btn-primary btn-sm">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditarTareaForm;
