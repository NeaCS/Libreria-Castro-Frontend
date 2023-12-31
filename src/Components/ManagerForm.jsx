import "../assets/style/managerForm.css";
import { ButtonAlCarrito } from "../assets/style/styledComponents/buttonAlCarrito";
import ManagerGallery from "./ManagerGallery";
import { LibrosContext } from "../context/LibrosContext";
import { useContext} from "react";

const ManagerForm = () => {
  const { valoresContextoLibros } = useContext(LibrosContext);
  const {
    agregarLibro,
    setTitulo,
    setAutor,
    setPrecio,
    setDescripcion,
    setImagen,
    setStock,
    setCategoria,
    setEstado,
    titulo,
    autor,
    precio,
    descripcion,
    stock,
    categoria,
    estado,
  } = valoresContextoLibros;

  const handleChange = (event, setterFunction) => {
    const valor =
      event.target.type === "file" ? event.target.files[0] : event.target.value;
    console.log(`${event.target.name}:`, valor);
    setterFunction(valor);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await agregarLibro(e);
  };


  return (
    <div className="book-form-container">
      <div className="manager_typography">
        <h4>Agregar Producto</h4>
      </div>
      {/* form */}
      <form onSubmit={handleSubmit}>
        <div className="inputs-container">
          <div className="manager-form_input-container">
            <label>Titulo</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="titulo"
              placeholder="Título"
              value={titulo}
              onChange={(event) => handleChange(event, setTitulo)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Autor</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="autor"
              value={autor}
              placeholder="Autor"
              onChange={(event) => handleChange(event, setAutor)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Precio</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="precio"
              value={precio}
              placeholder="Precio"
              onChange={(event) => handleChange(event, setPrecio)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Stock</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="stock"
              placeholder="Stock"
              value={stock}
              onChange={(event) => handleChange(event, setStock)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Categoría</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="categoria"
              placeholder="Categoría"
              value={categoria}
              onChange={(event) => handleChange(event, setCategoria)}
              required
            />
          </div>
          <div className="manager-form_input-container">
            <label>Estado</label>
            <input
              className="manager-form_inputs"
              type="text"
              name="estado"
              placeholder="Estado"
              value={estado}
              onChange={(event) => handleChange(event, setEstado)}
              required
            />
          </div>
          <div
            className="manager-form_input-container"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <label>Imagen</label>
            <input
              onChange={(event) => handleChange(event, setImagen)}
              className="form-control"
              name="imagen"
              // value={imagen}
              type="file"
              accept="image/*"
            />
          </div>
          <div className="manager-form_input-container">
            <label>Descripcion</label>
            <textarea
              rows="7"
              cols="50"
              className="manager-form_inputs"
              type="text"
              name="descripcion"
              value={descripcion}
              placeholder="Escribe una descripción"
              onChange={(event) => handleChange(event, setDescripcion)}
              required
            />
          </div>
        </div>
        <div className="manager-button_action">
          <ButtonAlCarrito type="submit">Subir Producto</ButtonAlCarrito>
        </div>
      </form>
      <div className="manager_typography">
        <h4>Editar/Eliminar Producto</h4>
      </div>
      <div className="book-form-container">
      <ManagerGallery />
      </div>
    </div>
  );
};

export default ManagerForm;
