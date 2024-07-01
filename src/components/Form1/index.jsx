import {useState} from "react";

const Form1 = () => {
    const [nome, setNome] = useState("");

    const handleChange = (e) => {
        setNome(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Dado enviado => Nome: ${nome}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input value={nome} onChange={handleChange} type="text" name="nome" id="nome"
                           placeholder="Digite o seu nome"/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form1;