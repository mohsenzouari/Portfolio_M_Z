import * as React from "react";
import './modal.scss';
//import { useState } from "react";

export const Modal = ({ closeModal , img , title, description}) => {
    //const [isModalOpen, setModal] = useState(false);
  return (
    <div className="modal">
       <div className="modal-body">
            <div className="left">
                <div className="containerImage">
                    <img src={img} alt=""/>
                </div>
            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>{title}</h2>
                    <div className="description">
                    {description}
                    </div>      
                </div>
            </div>
        </div>
    </div>
  );
};