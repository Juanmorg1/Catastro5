import { Link } from "react-router-dom";
import { useRef, useState } from "react";

export function GestUsuarios() {
  const [error,setError] = useState();
  const [msgerror,setMsgerror] = useState();
  const nombre_usu = useRef();
  const email_usu = useRef();
  const contrasena_usu = useRef();
  const rol_usu = useRef();
  
  function crear(){
    const usuario = nombre_usu.current.value;
    const correo = email_usu.current.value;
    const contrasena = contrasena_usu.current.value;
    const rol = rol_usu.current.value;
      
      fetch("http://localhost:8081/user/guardar_user",{
          headers : {"content-type":"application/json"},
          method:"POST",
          body: JSON.stringify({usuario,correo,contrasena,rol})
      })
      .then(res=>res.json())
      .then(res=>{
          if (res.estado=="OK"){
              setError(true);
              setMsgerror(res.msg);
          }
          else{
              
              setError(true);
              setMsgerror(res.msg);
          }
      });
  };

  function buscar(){
    const usuario = nombre_usu.current.value;
      
      fetch("http://localhost:8081/user/consultar_user",{
          headers : {"content-type":"application/json"},
          method:"POST",
          body: JSON.stringify({usuario})
      })
      .then(res=>res.json())
      .then(res=>{
          console.log("Esta aqui")
          if (res.estado=="OK"){
              email_usu.current.value = res.dato.correo;
              contrasena_usu.current.value = res.dato.contrasena;
              rol_usu.current.value = res.dato.rol;
              setError(true);
              setMsgerror(res.msg);
          }
          else{
              setError(true);
              setMsgerror(res.msg);
          }
      })
      .catch(res => {
          setError(true);
          setMsgerror(res.msg);
      })
  };

  function eliminar(){
    const usuario = nombre_usu.current.value;

      fetch("http://localhost:8081/user/eliminar_user",{
          headers : {"content-type":"application/json"},
          method:"POST",
          body: JSON.stringify({usuario})
      })
      .then(res=>res.json())
      .then(res=>{
          if (res.estado=="OK"){
              setError(true);
              setMsgerror(res.msg);
          }
          else{
              setError(true);
              setMsgerror(res.msg);
          }
      })
      .catch(res => {
          setError(true);
          setMsgerror(res.msg);
      })
  };

  function actualizar(){
    const usuario = nombre_usu.current.value;
    const correo = email_usu.current.value;
    const contrasena = contrasena_usu.current.value;
    const rol = rol_usu.current.value;

      fetch("http://localhost:8081/user/actualizar_user",{
          headers : {"content-type":"application/json"},
          method:"POST",
          body: JSON.stringify({usuario,correo,contrasena,rol})
      })
      .then(res=>res.json())
      .then(res=>{
          if (res.estado=="OK"){
              setError(true);
              setMsgerror(res.msg);
          }
          else{
              setError(true);
              setMsgerror(res.msg);
          }
      });
  };

  return (
    <div className="container">
      <header class="index_home">
        <h1 class="title">Alcaldia de ibague</h1>
        <nav class="navbar subtitle">
          <Link to="/gestUsuarios" className="">Usuarios</Link>
          <Link to="/gestPrediosAdm" className="">Predios</Link>
          <Link to="/CronoPagosAdm" className="">Cronograma</Link>
          <Link to="/PlatPagosAdm" className="">Pagos</Link>
          <Link to="/" className="">Cerrar Sesión</Link>
        </nav>
      </header>
      <section className="content">
        <section className="content_1">
          <dl className="txt">
            <dt>Gestion de Predios</dt>
            <dd>Crear Predio</dd>
            <dd>Actualizar Propietario</dd>
            <dd>Buscar Predios</dd>
            <dt>Cronograma de Pagos</dt>
            <dd>Generacion de Cobros</dd>
            <dd>Fecha Maxima de Pago</dd>
            <dd>Fecha de Pago con Descuento</dd>
            <dt>Plataforma de Pago</dt>
            <dd>Generacion de Multas</dd>
            <dd>Acuerdos de Pago</dd>
          </dl>
        </section>
        <section className="content_2">
          
          <form action="" className="grilla__xx txt" method="post">  
            <div className="nom_xx">
              <label htmlFor="y1">Nombre de Usuario</label>
              <input type="text" name="" id="y1" ref={nombre_usu}/>
            </div>
            <div className="email_xx">
              <label htmlFor="y2">Email de Usuario</label>
              <input type="text" name="" id="y2" ref={email_usu}/>
            </div>
            <div className="dependen_xx">
              <label htmlFor="y5">Contraseña</label>
              <input type="password" name="" id="y5" ref={contrasena_usu}/>
            </div>
            <div className="contact_xx">
              <label htmlFor="y4">Rol</label>
              <input type="text" name="" id="y4" ref={rol_usu}/>
            </div>
            <div className="search_xx">
              <button type="button" onClick={buscar}>Buscar Usuario</button>
            </div>
            <div className="list_xx">
              <button>Lista de Usuarios</button>
            </div>
            <div className="form_btns">
              <button type="button" onClick={crear}>Crear Usuario</button>
              <button type="button" onClick={actualizar}>Actualizar Usuario</button>
              <button type="button" onClick={eliminar}>Borrar Usuario</button>
            </div>
            <div className="textarea_xx">
              <p>Usuarios Registrados en Plataforma</p>
              <div className="jaja"></div>
              {error && <div className="alert alert-danger">{msgerror}</div>}
            </div>
          </form>
        </section>
      </section>
      <footer className="foot_2">
        <hr />
      </footer>
    </div>
  );
}
export default GestUsuarios;
