import React from "react";
import "./TodoItem.css";
function TodoItem(props) {
    console.log(props.item)
  return (
    <div>
      {props.item
        ? props.item.map((data) => {
            console.log(data)
            return (
              <div>
                <div className="">{data.title}</div>
                
              </div>
            );
          })
        : ""}
    </div>
  );
}

export default TodoItem;
