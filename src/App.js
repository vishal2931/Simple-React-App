import { useState } from "react";
import "./App.css";
import Form from "./Components/Form/Form";
import List from "./Components/List/List";
import Modal from "./Components/Modal/Modal";

function App() {

    const nameList = [];
    const [names,setNewName] = useState(nameList);
    const [showModal, setModalProperty] = useState({display:false});
    let modalMessage = '';

    const displayNewName = (newNameData) => {
        setNewName((prevData) => { return [newNameData,...prevData]; });
    }

    const isModalDisplay = (isDisplay) => {
        modalMessage = isDisplay.message;
        setModalProperty({display:true,'message':modalMessage});
    }

    const modalCloseHandler = (clickEvent) => {
        setModalProperty({display:false});
    }

	return (
		<div className="main-div">
            <Form onDisplayNewName={displayNewName} modalDisplay={isModalDisplay}/>
            <div className="mt-3 name-list">
                <List items = {names}/>
            </div>
            {showModal.display === true && (<Modal modalMessage={showModal.message} onClickCloseHandler={modalCloseHandler}/>)}
		</div>
	);
}

export default App;
