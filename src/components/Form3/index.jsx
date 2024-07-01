import {useState} from "react";

const Form3 = () => {
    const [formData, setFormData] = useState({
        nome: "",
        email: ""
    });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Nome: ${formData.nome}, Email: ${formData.email}`);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nome">
                    Nome:
                    <input
                        type="text"
                        name="nome"
                        id="nome"
                        placeholder="Digite o seu nome"
                        value={formData.nome}
                        onChange={handleChange}
                    />
                </label>
                <label htmlFor="email">
                    Email:
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Digite o seu email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form3;