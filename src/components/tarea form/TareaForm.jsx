import React from "react";
import "../tarea form/tareaForm.css";

const TareaForm = ({ handleSubmit, handleChange, inputTarea }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          maxLength="25"
          type="text"
          className="form-control form-agregar-tarea"
          placeholder="Escribe la tarea"
          value={inputTarea}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </>
  );
};

export default TareaForm;
