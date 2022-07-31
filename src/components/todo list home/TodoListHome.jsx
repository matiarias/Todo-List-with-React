import React, { useState } from "react";
import { useEffect } from "react";
import TareaForm from "../tarea form/TareaForm";
import TareaCard from "../tarea card/TareaCard";
import EditarTareaForm from "../editar tarea form/EditarTareaForm";

import "../todo list home/todoListHome.css";

const TodoListHome = () => {
  const [inputValue, setInputValue] = useState("");
  const [task, setTask] = useState([]);
  const [validacion, setValidacion] = useState(true);
  const [modoEdit, setModoEdit] = useState(false);
  // const [editInput, setEditInput] = useState("");

  // --- useEffect para traer los datos con local storage y luego agregar cada tarea en el arreglo -----

  useEffect(() => {
    if (localStorage.getItem("tareas")) {
      setTask(JSON.parse(localStorage.getItem("tareas")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(task));
  }, [task]);

  // ----------------------- Función para obtener el value del input principal -------------------

  const handleChange = ({ target }) => {
    setInputValue(target.value);
  };

  // ----------------- Función submit del formulario que agrega las tareas ------------------

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTask([inputValue.trim(), ...task]);
      setInputValue("");
      setValidacion(true);
    } else {
      setValidacion(false);
    }
  };

  // ---------------------- Función botón Borrar todas las tareas --------------------------

  const borrarTodo = () => {
    setTask([]);
  };

  // -------------------- Funcion botón para abrir el formulario para editar tareas ----------------------

  const editarTareaBtn = () => {
    setModoEdit(true);
  };

  // --------------------------------------------------------------------------------------------

  return (
    <>
      <div className="container">
        <div className="row mt-4">
          <div className="col-12 col-md-6 offset-md-3 mb-1 d-flex justify-content-between align-items-center">
            <h3 className="text-center">Lista de tareas</h3>
            <button onClick={borrarTodo} className="btn btn-dark btn-sm">
              Borrar Todo
            </button>
          </div>
        </div>

        {/* -------------------------- Tarea Form ----------------------- */}

        <div className="row mt-2">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="d-flex">
              <div className="w-100">
                <TareaForm
                  handleSubmit={handleSubmit}
                  inputValue={inputValue}
                  handleChange={handleChange}
                />
              </div>

              <div className="ms-3">
                <button onClick={handleSubmit} className="btn btn-secondary">
                  Agregar
                </button>
              </div>
            </div>

            {!validacion && (
              <div className="alert alert-danger mt-3" role="alert">
                Escribe tu tarea por favor!
              </div>
            )}
            <p className="mt-2">Tareas Pendientes: {task.length}</p>
          </div>
        </div>

        {/* ------------------------- Tarea Card ----------------------- */}

        <div className="row">
          <div className="col-12 col-md-6 offset-md-3 mt-3">
            {!modoEdit ? (
              task.map((item, index) => (
                <TareaCard
                  key={index}
                  item={item}
                  id={index}
                  editarTareaBtn={editarTareaBtn}
                  task={task}
                  setTask={setTask}
                />
              ))
            ) : (
              <EditarTareaForm
                setModoEdit={setModoEdit}
                task={task}
                setTask={setTask}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoListHome;
