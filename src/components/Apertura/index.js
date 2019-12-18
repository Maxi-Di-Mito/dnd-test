import React from 'react';
import { withDraggability } from '../Draggable';


const Apertura = (props) => {
    const { componentProps : {news} } = props;
    return (
        <div>
            <ul>
                {news.map( (n,index) => <li key={index}>{n}</li> )}
            </ul>
        </div>
    )
}



export default withDraggability(Apertura);