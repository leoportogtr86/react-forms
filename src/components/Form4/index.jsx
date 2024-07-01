import React, {useReducer} from 'react';

// Estado inicial do formulário
const initialState = {
    nome: '',
    email: '',
    errors: {
        nome: ''
    }
};

// Função redutora para atualizar o estado
function reducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value
            };
        case 'SET_ERROR':
            return {
                ...state,
                errors: {
                    ...state.errors,
                    [action.field]: action.value
                }
            };
        default:
            return state;
    }
}

function Form4() {
    const [state, dispatch] = useReducer(reducer, initialState);

    // Função para lidar com mudanças nos campos de texto
    const handleChange = (event) => {
        const {name, value} = event.target;
        dispatch({
            type: 'SET_FIELD',
            field: name,
            value: value
        });
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (event) => {
        event.preventDefault();

        // Validação simples para garantir que o campo de nome não esteja vazio
        if (state.nome.trim() === '') {
            dispatch({
                type: 'SET_ERROR',
                field: 'nome',
                value: 'O campo nome é obrigatório.'
            });
        } else {
            dispatch({
                type: 'SET_ERROR',
                field: 'nome',
                value: ''
            });
            alert(`Nome: ${state.nome}\nEmail: ${state.email}`);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Nome:
                <input
                    type="text"
                    name="nome"
                    value={state.nome}
                    onChange={handleChange}
                />
                {state.errors.nome && <div style={{color: 'red'}}>{state.errors.nome}</div>}
            </label>
            <br/>
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={state.email}
                    onChange={handleChange}
                />
            </label>
            <br/>
            <button type="submit">Enviar</button>
        </form>
    );
}

export default Form4;
