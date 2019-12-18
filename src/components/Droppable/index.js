import React from 'react';
import { Droppable as DropDND } from 'react-beautiful-dnd';
import Apertura from '../Apertura';
import Banner from '../Banner';

const grid = 8;

const getListStyle = isDraggingOver => ({
    background: isDraggingOver ? "lightblue" : "lightgrey",
    padding: grid,
    width: 250
  });

export const withDropzone = Comp => props => (
    <DropDND droppableId={props.id}>
        {
            (provided, snapshot) => (
                <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                >                    
                    <Comp {...props}/>
                    {provided.placeholder}
                </div>
            )
        }
    </DropDND>
)