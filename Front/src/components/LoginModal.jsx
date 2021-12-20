import { React, useRef , useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginModal() {
    const [error,setError] = useState();
    const [msgerror,setMsgerror] = useState();
    const usuarioref = useRef();
    const mailref = useRef();
    const passref = useRef();
    const rolref = useRef();

    function translate() {
      let overlay = document.getElementById("over1"),
        overlay2 = document.getElementById("over2");
      function t() {
        overlay.style.transform = "scale(0.9) translateX(-120%)";
        overlay2.style.transform = "translateX(-100%)";
        function x() {
          overlay2.style.transform = "scale(1) translateX(-100%)";
        }
        setTimeout(x, 600);
      }
      overlay.style.transform = "scale(0.9)";
      setTimeout(t, 600);
    }
    
    function back() {
      let overlay = document.getElementById("over1"),
        overlay2 = document.getElementById("over2");
      overlay2.style.transform = "scale(0.9) translateX(-110%)";
      setTimeout(t, 600);
      function t() {
        overlay2.style.transform = "";
        overlay.style.transform = "";
      }
    }
    const maillogin = useRef();
    const passlogin = useRef();

    function login(){
      console.log("aqui");
      const correo = maillogin.current.value;
      const contrasena = passlogin.current.value;
      console.log(correo,contrasena)

      fetch("http://localhost:8081/user/login",{
          headers : {"content-type":"application/json"},
          method:"POST",
          body: JSON.stringify({correo,contrasena})
      })
      .then(res=>res.json())
      .then(res=>{
          console.log("aqui")
          if (res.estado=="OK"){
              console.log(res.rolusu);
              if(res.rolusu=="Administrador"){
                {window.location.href="/HomeAdm"}  
              }
              if(res.rolusu=="Usuario Interno"){
                {window.location.href="/HomeInt"}
              }
              if(res.rolusu=="Usuario Externo"){
                {window.location.href="/HomeExt"}
              }
          }
          else{
              setError(true);
              setMsgerror(res.msg);
          }
      })
    }

    function registrar(){
      const usuario = usuarioref.current.value;
      const correo = mailref.current.value;
      const contrasena = passref.current.value;
      const rol = "Usuario Externo";

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
    }
    
    return (
      <div className="login_forms">
        <div className="cont">
          <div className="anime_cont">
            <div className="animation_cont">
              <div className="login" id="over1">
                {error && <div className="alert alert-danger">{msgerror}</div>}
                <form action="" method="">
                <label className="subtitle" for="mail">Correo</label>
                  <input className="subtitle" type="email" name="" id="user" ref={maillogin}/>
                  <label className="subtitle" for="pass">Contraseña</label>
                  <input className="subtitle" type="password" name="" id="pass" ref={passlogin} />
                  <button type="button" className="btn" onClick={login}>Iniciar Sesión </button>
                </form>
                <a className="txt" href="#">
                  ¿Has Olvidado la Contraseña?
                </a>
                <hr />
                <button className="btn" type="button" id="reg" onClick={translate}> Registrarse </button>
              </div>
              <div className="register" id="over2">
                {error && <div className="alert alert-danger">{msgerror}</div>}
                <img src="img/back_icon.png" alt="back icon" srcset="" width="25" id="back" onClick={back}/>
                <form action="" method="">
                  <div>
                    <label className="subtitle" for="user_r">Nombre de Usuario</label>
                    <input className="subtitle" type="text" name="" id="user_r" ref={usuarioref}/>
                  </div>
                  <div>
                    <label className="subtitle" for="mail">Correo</label>
                    <input className="subtitle" type="email" name="" id="mail" ref={mailref}/>
                  </div>
                  <div>
                    <label className="subtitle" for="pass_r">Contraseña</label>
                    <input className="subtitle" type="password" name="" id="pass_r" ref={passref}/>
                  </div>
                  <button type="button" className="btn" onClick={registrar}>Registrarse</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>    
    );
}
export default LoginModal;
