import React from "react";
import "./List.css";

const List = (props) => {

    return <ul className="list-group d-flex juysify-content-center align-items-center">
        {props.items.map((item) => (
            <li key={item.id} className="list-group-item">
                {item.name} {'( '+item.age+' Years Old )'}
            </li>
        ))}
    </ul>
}

export default List;