import {useRef} from "react";

const Form2 = () => {
    const emailRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Email: ${emailRef.current.value}`);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">
                    Email:
                    <input type="email" ref={emailRef} placeholder="Digite o seu email"/>
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default Form2;