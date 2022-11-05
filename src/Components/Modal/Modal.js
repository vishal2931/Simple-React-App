import React from "react";

const Modal = (props) => {

    const onClickClose = (property) => {
        
        props.onClickCloseHandler(true);
    }

	return (
		<div className="modal fade d-block show" aria-labelledby="exampleModalLabel" aria-hidden="true" >
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							Error
						</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onClickClose}></button>
					</div>
					<div className="modal-body">{ props.modalMessage }</div>
				</div>
			</div>
		</div>
	);
};

export default Modal;
