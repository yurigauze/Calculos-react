import axios from "axios";

export class CalculadoraService{
    URL = "http://localhost:8080/calculos"
    salvar(calculo){
        return axios.post(this.URL, calculo);
    }

    consultar(){
        return axios.get(this.URL);
    }
}