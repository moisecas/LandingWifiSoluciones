import React from 'react'
import "./Formulario.css"; 

const Formulario = () => {
  return (
    <div>
        <form>
            <div class="mb-3" id='div1'> 
                <label for="exampleFormControlInput1" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="nombre completo"/>
            </div>
            <div class="mb-3" id='div1'> 
                <label for="exampleFormControlInput1" class="form-label">Email o correo electronico</label> 
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div class="mb-3" id='div2'>
                <label for="exampleFormControlTextarea1" class="form-label">Describa su requerimiento</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>  
            </div> 
        </form>
        

    </div>
  )
}

export default Formulario