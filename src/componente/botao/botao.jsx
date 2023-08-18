import React, { useState } from "react";
import './botao.css';

const Botao = ({ label, onClick }) => {



    return (
        <>
            <button className="botao" onClick={onClick}>{label}</button>
        </>
    );
}
export default Botao;