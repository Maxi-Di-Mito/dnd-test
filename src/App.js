import React,{useState, useEffect} from "react";
import shortId from 'shortid';
import { DragDropContext } from 'react-beautiful-dnd';
import Dropzone from './components/Dropzone';


const initialItems = [
  {
    name: 'apertura',
    componentProps: {
      news: [1,2,3,4,5]
    }
  },
  {
    name: 'banner',
    componentProps: {
      code: '<div id="banner"><span>BANNER</span></div>'
    }
  },
  {
    name: 'banner',
    componentProps: {
      code: '<div id="banner"><span>BANNER 2222</span></div>'
    }
  }
]

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const getItems = (items) => {
  items.forEach( i => i.id = shortId.generate());
  return items;
}


function App() {
  const [items, setItems] = useState([]);
  
  useEffect( () => {
    setItems(getItems(initialItems));
  },[])


  const onDragEnd = (result) => {
    if(!result.destination) return;

    const newItems = reorder(items,result.source.index,result.destination.index);
    setItems(newItems);
  }

  const agregarHandler = event => {
    const newArray = Array.from(items);
    newArray.push({
      name: 'apertura',
      componentProps: {
        news: ["a","b","c"]
      },
      id: shortId.generate()
    })

    setItems(newArray);
  }



  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Dropzone id={'MASTER'} items={items}/>
      <button onClick={agregarHandler}>Agregar</button>
      <pre>{JSON.stringify(items,null,2)}</pre>
    </DragDropContext>
  );
}

export default App;
