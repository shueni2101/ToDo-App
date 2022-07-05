import React, { Component } from "react";
import Formulario from "../Formulario/Formulario.jsx";
import Card from "../card/Card"

import "./Todos.css"
class Todos extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
            
        }
    }
    nuevoTodo=(todo)=>{
        this.setState({todos: [...this.state.todos, todo]})
    }

 render(){
     return (
         <div className="contenedorGeneral">
            <div className="contenedorFormulario">
                <Formulario nuevoTodo={this.nuevoTodo} />
            </div>
            <div className="contenedorTodo">
               {this.state.todos.map((todo, i)=> {
                return <Card todo={todo} key={i}  id={i}/>
               }
               )}
            </div>
         </div>
     )
 }
}
export default Todos;