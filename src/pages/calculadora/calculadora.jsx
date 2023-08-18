import React, { useEffect, useState } from "react";
import Botao from "../../componente/botao/botao";
import './calculadors.css';
import { CalculadoraService } from "../../service/CalculadoraService";

const Calculadora = () => {

    const [valor1, setValor1] = useState();
    const [valor2, setValor2] = useState();
    const [resultado, setResultado] = useState();
    const calculadoraSerive = new CalculadoraService();
    const [calculos, setCalculos] = useState(null);

    useEffect(() => {
        if (calculos == null) {
            consultar();
        }
    }, [calculos])

    const consultar = () => {
        calculadoraSerive.consultar().then(data => {
            setCalculos(data.data);
        })
    }

    const salvar = (valor1, valor2, operacoes) => {
        calculadoraSerive.salvar({ valor1: valor1, valor2: valor2, operacoes: operacoes }).then(data => {
            console.log(data);
            setCalculos(null);
        })
    }

    const somar = () => {

        salvar(valor1, valor2, "+");

        setResultado(parseFloat(valor1) + parseFloat(valor2));
    }
    const subtrair = () => {

        salvar(valor1, valor2, "-");

        setResultado(parseFloat(valor1) - parseFloat(valor2));
    }

    return (
        <>
            <div className="container">
                <h3>Calculadora</h3>
                <input className="field" id="valor1" type="number" onChange={(e) => setValor1(e.target.value)} />
                <input className="field" id="valor2" type="number" onChange={(e) => setValor2(e.target.value)} />
                <Botao label="Somar" onClick={somar} />
                <Botao label="Subtrair" onClick={subtrair} />
                <div className="resultado">{resultado}</div>

                {calculos!=null && calculos.map(calculo=>(
                    <p>{calculo.valor1} {calculo.operacoes} { calculo.valor2}</p>
                ))}
            </div>
        </>
    )

}
export default Calculadora;