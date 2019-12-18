import React from 'react';
import { withDraggability } from '../Draggable';


const Banner = (props) => {
    const { componentProps : {code} } = props;
    return (
        <div dangerouslySetInnerHTML={{__html: code}}/>
    )
}





export default withDraggability(Banner);