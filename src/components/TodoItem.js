import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
    const handleEditbutton = (id)=>{   
    }
  return (
    <div className='flex-box'>
      {props.item
        ? props.item.map((data) => {
            console.log(data)
            return (
              <div className="flex-item">
                <div className="flex-item-data">{data.title}</div>
                <div>
                <button className="" type='button' onClick={handleEditbutton(data.id)}><i class="fa-solid fa-pen-to-square"></i></button>
                <button className="" type='button' onClick={handleDeletebutton(data.id)}><i class="fa-solid fa-delete-left"></i></button>
                </div>
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TodoItem;
