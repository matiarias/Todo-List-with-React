import React, { useState } from "react";
import { useEffect } from "react";
import TareaForm from "../tarea form/TareaForm";
import TareaCard from "../tarea card/TareaCard";
import EditarTareaForm from "../editar tarea form/EditarTareaForm";

import { Toaster, toast } from "react-hot-toast";

import "../todo list home/todoListHome.css";
import Footer from "../footer/Footer.jsx";

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

  const toastAgregarTarea = () => {
    toast.success("Tareas Agregada!", {
      position: "bottom-center",
      duration: 3000,
      reverseOrder: "true",
      style: {
        borderRadius: "10px",
        background: "#f3d6b3 ",
        color: "#000",
      },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== "") {
      setTask([inputValue.trim(), ...task]);
      setInputValue("");
      setValidacion(true);
      toastAgregarTarea();
    } else {
      setValidacion(false);
    }
  };

  // ---------------------- Función botón Borrar todas las tareas --------------------------

  const toastBorrarTodo = () => {
    toast.error("Tareas Eliminadas!", {
      position: "top-right",
      duration: 2000,
      reverseOrder: "true",
      iconTheme: {
        primary: "#9d6f4f",
        secondary: "#FFFAEE",
      },

      style: {
        borderRadius: "10px",
        background: "#555",
        color: "#fff",
      },
    });
  };

  const borrarTodo = () => {
    setTask([]);
    toastBorrarTodo();
  };

  // -------------------- Funcion botón para abrir el formulario para editar tareas ----------------------

  const editarTareaBtn = () => {
    setModoEdit(true);
  };

  // --------------------------------------------------------------------------------------------

  return (
    <>
      <div className="container container-principal">
        <div className="row">
          <div className="col-12 col-md-6 offset-md-3">
            <div className="card body-todo-list mt-5">
              <div className="card-body">
                {/* ---------------------- Title card --------------------- */}

                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="title-todo-list">Lista de tareas</h3>
                  <button
                    onClick={borrarTodo}
                    className="btn btn-sm button-borrar-todo"
                  >
                    Borrar Todo
                  </button>
                </div>

                {/* -------------------------- Tarea Form ----------------------- */}

                <div className="d-flex justify-content-between align-items-center">
                  <div className="w-100">
                    <TareaForm
                      handleSubmit={handleSubmit}
                      inputValue={inputValue}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="ms-3">
                    <button
                      onClick={handleSubmit}
                      className="btn btn-sm button-agregar-tarea"
                    >
                      Agregar
                    </button>
                  </div>
                </div>

                {!validacion && (
                  <div className="alert alert-validacion mt-3" role="alert">
                    Escribe tu tarea por favor!
                  </div>
                )}
                <p className="contador-tareas mt-2">
                  Tareas Pendientes: {task.length}
                </p>

                {/* ------------------------- Tarea Card ----------------------- */}

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
        </div>
        <Footer />
      </div>

      <Toaster />
    </>
  );
};

export default TodoListHome;
