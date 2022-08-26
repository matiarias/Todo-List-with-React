import React, { useState } from "react";
import { useEffect } from "react";
import TareaForm from "../tarea form/TareaForm";
import TareaCard from "../tarea card/TareaCard";
import EditarTareaForm from "../editar tarea form/EditarTareaForm";
import "../todo list home/todoListHome.css";

import { Toaster, toast } from "react-hot-toast";
import Footer from "../footer/Footer.jsx";

const TodoListHome = () => {
  const [inputTarea, setInputTarea] = useState("");

  const [tareas, setTareas] = useState([]);

  const [validacion, setValidacion] = useState(false);

  const [modoEditTarea, setModoEditTarea] = useState(false);

  const [itemEdit, setItemEdit] = useState(null);

  // -- useEffect para traer los datos con local storage y luego agregar cada tarea en el local storage --

  useEffect(() => {
    if (localStorage.getItem("tareas")) {
      setTareas(JSON.parse(localStorage.getItem("tareas")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tareas", JSON.stringify(tareas));
  }, [tareas]);

  // ----------------------- Función para obtener el value del input tarea -------------------

  const handleChange = ({ target }) => {
    setInputTarea(target.value);
  };

  // ----------------- Función submit del formulario que agrega las tareas ------------------

  const toastTareaAgregada = () => {
    toast.success("Tareas Agregada!", {
      position: "bottom-center",
      duration: 2000,
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

    if (inputTarea.trim() !== "") {
      setTareas([inputTarea.trim(), ...tareas]);
      setInputTarea("");
      setValidacion(false);
      toastTareaAgregada();
    } else {
      setValidacion(true);
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
    setTareas([]);
    toastBorrarTodo();
  };

  // ------------------------------- función modo editar tarea ------------------------------------

  const abrirFormEditTarea = (item, tareas, id) => {
    setItemEdit({
      tarea: item,
      id: id,
    });
    setModoEditTarea(true);
  };

  // -------------------------------------------------------------------------------------------------

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
                      inputTarea={inputTarea}
                      handleChange={handleChange}
                    />
                  </div>

                  <div className="ms-3">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="btn btn-sm button-agregar-tarea"
                    >
                      Agregar
                    </button>
                  </div>
                </div>

                {validacion && (
                  <div className="alert alert-validacion mt-3" role="alert">
                    Escribe tu tarea por favor!
                  </div>
                )}
                <p className="contador-tareas mt-2">
                  Tareas Pendientes: {tareas.length}
                </p>

                {/* ------------------------- Tarea Card ----------------------- */}

                {modoEditTarea && Boolean(itemEdit) ? (
                  <EditarTareaForm
                    tareas={tareas}
                    itemEdit={itemEdit}
                    setTareas={setTareas}
                    setModoEditTarea={setModoEditTarea}
                  />
                ) : (
                  tareas.map((item, index) => (
                    <TareaCard
                      key={index}
                      item={item}
                      id={index}
                      tareas={tareas}
                      setTareas={setTareas}
                      abrirFormEditTarea={abrirFormEditTarea}
                    />
                  ))
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
