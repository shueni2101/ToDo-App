import React from "react";
import styles from "./Formulario.module.css";
class Formulario extends React.Component{
    constructor(props){
        super(props);
        this.state={
            titulo:"",
            responsable:"",
            descripcion:"",
            prioridad:"low",
            validacion: true,
        }
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange= (e)=>{
      this.setState({[e.target.name]: e.target.value})
    }
    submit = (e)=>{
        e.preventDefault();
        if(this.state.titulo.trim()!== ""){
            this.props.nuevoTodo(this.state)
            this.setState({titulo: ""})
            this.setState({responsable: ""})
            this.setState({descripcion: ""})
        }
        console.log(this.state.titulo)
    }
    render(){
        return (
            <div className={styles.contenedorGeneralForm}>
               <div className={styles.contenedorFormulario}>
                    <form className={styles.formulario} onSubmit={this.submit}>
                        <div className={styles.tituloFormulario}>
                        <input type="text" className={styles.inputTitle} value={this.state.titulo} onChange={this.handleChange} name="titulo" placeholder="Title" ></input>
                        </div>
                        <div className={styles.responsableFormulario}> 
                            <input type="text" value={this.state.responsable}  onChange={this.handleChange} name="responsable" placeholder="Responsable" className={styles.inputResponsable}></input>
                        </div>
                        <div className={styles.descripcionFormulario}>
                            <textarea className={styles.inputDescripcion}  onChange={this.handleChange} value={this.state.descripcion} placeholder="Details" name="descripcion"></textarea>
                        </div>
                        <div className={styles.prioridadFormulario}>
                            <select className={styles.selectFormulario}  onChange={this.handleChange} name="prioridad" value={this.state.prioridad}>
                                <option className={styles.option}> Low </option>
                                <option className={styles.option}> Medium </option>
                                <option className={styles.option}> High </option>
                            </select>
                        </div>
                        <div className={styles.divBoton}>
                            <button className={styles.botonGuardar} type="submit">Guardar</button>
                        </div>
                    </form>
               </div>
            </div>
        )
    }
}

export default Formulario;