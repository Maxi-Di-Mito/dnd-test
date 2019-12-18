import React from 'react';
import shortid from 'shortid';
import { withDropzone } from '../Droppable';
import Apertura from '../Apertura';
import Banner from '../Banner';


const options = {
    apertura: Apertura,
    banner: Banner
}

const DropZone = props => (
    <div>
        {
            props.items.map((item, index) => {
                const Comp = options[item.name];
                if(Comp) return <Comp {...item} key={index}  index={index}/>
                else return null;
            })
        }
    </div>
)



export default withDropzone(DropZone);