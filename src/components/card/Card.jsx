import React from "react";
import styles from "./Card.module.css";


const Card= (props)=>{

    return(
        <div className={styles.contenedor}>

            <div className={styles.title}> 
            <spam>Title:</spam>
             <h2 className={styles.sun}>{props.todo.titulo} </h2>
           </div>

           <div className={styles.responsable}> 
          <spam>Responsable:</spam> 
              <h2 className={styles.sun}>{props.todo.responsable}</h2>
           </div>

           <div className={styles.descripcion}>
           <spam>Description:</spam>  
             <p className={styles.sun}>{props.todo.descripcion}</p>
           </div>
           
           <div className={styles.prioridad}> 
           <spam>Priority:</spam>
             <h2 className={styles.sun}>{props.todo.prioridad}</h2>
           </div>     
        </div>
    )
}
export default Card;