import React, { useState, useEffect, useContext } from "react";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const EditModal = props => {
    const { actions } = useContext(Context);

	return (
		<div className="modal" style={{ display: props.show ? "inline-block" : "none" }}>
			<div className="modal-dialog">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title">Modal title</h5>
						<button
							type="button"
							className="btn-close"
							data-bs-dismiss="modal"
							aria-label="Close"
							onClick={props.onClose}></button>
					</div>
					<div className="modal-body">
						<p>Modal body text goes here.</p>
					</div>
					<div className="modal-footer">
						<button
							type="button"
							className="btn btn-secondary"
							data-bs-dismiss="modal"
							onClick={props.onClose}>
							Close
						</button>
						<button type="button" className="btn btn-primary" 
                        onClick={
                            actions.editContact(props.item)
                            props.onClose}>
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

EditModal.propTypes = {
	onClose: PropTypes.func,
	show: PropTypes.bool,
	item: PropTypes.object
};
