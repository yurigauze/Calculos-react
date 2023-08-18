import React, {useState} from "react";

const Home = ({nome, idade}) =>{

    const [valor, setValor] = useState(0);

    const alterarValor = (v) =>{
        setValor(valor+1+v);
    }

    return(
        <>
        <h1>Pagina inicial</h1>
        <p>Meu nome é {nome} e minha idade é {idade}</p>
            <button onClick={()=>alterarValor(10)}>{valor} {valor*(-1)} {valor+2} {valor*-3} {valor+4} {valor*5} {valor^6} </button>
            <button onClick={() => setValor(0)}>reseta</button>
            <a href="/calculadora">Calculadora</a>

        </>
       
    )

}
export default Home;