import React from 'react'
import styled from 'styled-components'

const Acordeon = () => {
  return (
    <>
      <div className="row">
        <div className="col">
          <div className="tabs">
            <div className="tab">
              <input type="radio" id="rd1" name="rd" />
              <label className="tab-label" htmlFor="rd1">¿Cómo recuperar mi usuario o contraseña?</label>
              <div className="tab-content">
                Si en caso el usuario haya perdido u olvidado su contraseña, la única forma de recuperarlo será con el encargado de Desarrollo. 
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd2" name="rd" />
              <label className="tab-label" htmlFor="rd2">¿Cómo registro un producto?</label>
              <div className="tab-content">
                Para registrar un Producto, el usuario tiene que tener en cuenta lo siguiente:
                <br/>
                -Ingresar el SKU (Stock-keeping unit) o en todo caso generarlo en el botón negro de la derecha.
                <br/>
                -Deberá seleccionar la categoría que llevará el determinado producto.
                <br/>
                -Ingresará un breve descripción que detalle más al producto.
                <br/>
                -Como paso importante deberá agregar el stock entrante cuidadosamente acompañado del precio unitario.
                <br/>
                -Luego como último paso le asiganará una ubicación en el almacén para poder ser encontrado de manera rápida,
                los campos necesarios serían Pasillo/Metro/Origen.
                <br/><br/>
                Para más información <a href='/registro-productos'>ingrese aquí.</a>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd3" name="rd" />
              <label className="tab-label" htmlFor="rd3">¿Cómo registro proveedores?</label>
              <div className="tab-content">
                Para registrar proveedores, el usuario deberá tener en cosideración los siguientes puntos:
                <br/>
                <br/>
                -Deberá ingresar el id según la colerrativa que se esté usando
                <br/>
                -Seguido deberá completar la información de la razón social
                <br/>
                -Ingresa el RUC del proveedor
                <br/>
                -Digite el código postal acompañado del numero telefónico
                <br/>
                -Luego ingresará el correo Electrónico
                <br/>
                -Ingresas la dirección fiscal
                <br/>
                -Por ultimo seleccionará el País y Departamento en el cual está ubicado
                <br/>
                -Click al botón Registrar para guardar el nuevo Proveedor.
                <br/>
                -Hay 3 opciones adicionales, si se desea Consultar, se realiza atravez de el ID ingresado en un inicio,
                en caso contrario quiera Modificarlo, puede hacerlo de igual forma identificando al proveedor atravez del ID,
                y en caso de querer remover o eliminar el proveedor nuevamente se tiene que identificar el producto atraves 
                del ID y darle click al botón rojo de ELIMINAR.
                <br/><br/>
                Para más información <a href='/registro-proveedores'>ingrese aquí.</a>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd4" name="rd" />
              <label className="tab-label" htmlFor="rd4">¿Cómo agregar una ubicación a un producto?</label>
              <div className="tab-content">
                Para ingresar una ubicación a algún producto, existe en la parte inferior del formulario Registro de Productos
                3 campos para asignarselo (PASILLO - METRO - ORIGEN).
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd5" name="rd" />
              <label className="tab-label" htmlFor="rd5">¿Cómo puedo buscar la ubicación de un producto?</label>
              <div className="tab-content">
                Para que el usuario pueda buscar un producto de forma rápida, existe una seccion llamada Búsqueda de Producto, en
                donde deberá completar el formulario que contiene los siguientes campos:
                <br/>
                -Consultar el SKU (Stock-keeping unit)
                <br/>
                -Agregar una descripción del producto deseado.
                <br/>
                -Buscar y seleccionar la categoría en el listado.
                <br/>
                -Puede también agregar el Stock y/o precio
                <br/>
                -Si quiere aún consultar más rápido la ubicación del producto, podría hacerlo a través del boton SCANNEAR QR en la parte inferior derecho.
                <br/><br/>
                Para más información <a href='/busqueda-producto'>ingrese aquí.</a>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd6" name="rd" />
              <label className="tab-label" htmlFor="rd6">¿Cómo creo una nueva cuenta?</label>
              <div className="tab-content">
                Si el usuario tiene los permisos correspondientes podrá crear y/o generar una nueva cuenta, en caso no los tenga, este proceso
                deberá realizarse por un superior o encargado.
                <br/>
                Si tiene los permisos deberá seguir los pasos recomendados para generar una nueva cuenta exitosamente:
                <br/>
                -Se debe de ingresar el numero de DNI (Documento Nacional de Identidad) o Carnet de Extranjería si fuera el caso de un extrangero.
                -Deberá pensar e ingresar una constraseña lo más segura posible y que pueda recordar fácilmente.
                -Paso muy importante para tener los permisos correspondientes, deberá escoger el cargo que tendrá el nuevo usuario.
                -Como último paso deberá dar click en el botón negro Registrar.
                <br/><br/>
                Para más información <a href='/usuarios'>ingrese aquí.</a>
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd7" name="rd" />
              <label className="tab-label" htmlFor="rd7">¿Cómo puedo puedo comunicarme con ustedes?</label>
              <div className="tab-content">
                De ser necesario comunicarte con nosotros ya sea por un motivo de urgencia y/o cambios que se quieran realizar,
                deberá comunicarse con el CEO técnico de nuestra App al siguiente correo: 
                <br/>
                pt06790215@idat.edu.pe
                <br/>
                Jose Luis Chuquipiondo - CEO
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd8" name="rd" />
              <label className="tab-label" htmlFor="rd8">¿Cómo pasar la verficación?</label>
              <div className="tab-content">
                -Si estás logueandote y te apareció la verificación por numero de celuar, simplemente se 
                tiene que ingresar el número de celular ya registrado inicialmente al crear la cuenta.
                <br/>
                Te llegará un MSM con un código de verificación el cual lo ingresarás en el sistema para poder 
                ingresar sin problemas.
              </div>
            </div>
            <div className="tab">
              <input type="radio" id="rd10" name="rd" />
              <label htmlFor="rd10" className="tab-close">Cerrar todo &times;</label>
            </div>
          </div>
        </div>
      </div>
      <style jsx={true}>{`
      .top-row p {
        font-size: 115%;
        line-height: 22px;
        margin-top: 10px;
      }

      input {
        position: absolute;
        opacity: 0;
        z-index: -1;
      }

      .row {
        display: flex;
        width: 80%;
        margin: 40px auto;
        margin-top: 30px !important;
        max-width: 100%;
      }
      .row .col {
        flex: 1;
      }
      .row .col:last-child {
        margin-left: 1em;
        margin-right: 1em;
      }

      /* Accordion styles */
      .tabs {
        overflow: hidden;
        box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.5);
      }

      .tab {
        width: 100%;
        color: #fff;
        overflow: hidden;
      }
      .tab-label {
        display: flex;
        justify-content: space-between;
        padding: 1em;
        background: #3466D6;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid #0a5989;
        line-height: 25px;
        /* Icon */
      }
      .tab-label:hover {
        background: #0a5989;
      }
      .tab-label::after {
        content: "❯";
        width: 1em;
        height: 1em;
        text-align: center;
        transition: all 0.35s;
      }
      .tab-content {
        max-height: 0;
        padding: 0 1em;
        color: #000;
        background: white;
        transition: all 0.35s;
        font-size: 115%;
        line-height: 22px;
      }
      .tab-close {
        display: flex;
        justify-content: flex-end;
        padding: 1em;
        font-size: 0.75em;
        background: #000;
        cursor: pointer;
      }
      .tab-close:hover {
        background: #1a252f;
      }

      input:checked + .tab-label {
        background: #0a5989;
      }
      input:checked + .tab-label::after {
        transform: rotate(90deg);
      }
      input:checked ~ .tab-content {
        max-height: 100vh;
        padding: 1em;
      }
      `}</style>
    </>
  )
}

export default Acordeon