import React from "react";
import "../tarea form/tareaForm.css";

const TareaForm = ({ handleSubmit, handleChange, inputValue }) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          maxLength="25"
          type="text"
          className="form-control"
          placeholder="Escribe la tarea"
          value={inputValue}
          onChange={handleChange}
          autoFocus
        />
      </form>
    </>
  );
};

export default TareaForm;
