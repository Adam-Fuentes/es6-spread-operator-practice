import React, { useState } from "react";

function ToDoItem(props){
    return(
        <div onClick={() =>{//hasta que no se haga click no se pasa la function, de la otra manera siempre se le pasaría la function
            props.onChecked(props.id)
        }} >
            <li>{props.text}</li>
        </div>
    )
}

export default ToDoItem;