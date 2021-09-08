import Modal from 'react-modal';
import { Container, RadioBox, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/fechar.svg'
import entradas from '../../assets/Entradas.svg'
import saidas from '../../assets/Saídas.svg'
import { FormEvent, useState } from 'react';
import { api } from '../../services/api';

interface NewTransactionModalProps{
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {

    const [type, setType] = useState('deposit');
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);
    const [category, setCategory] = useState('');


    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault();

        const data = {
            title,
            value,
            type,
            category
        }

        api.post('/transactions', data)

    }

    return(
<Modal 
isOpen={isOpen}
onRequestClose={onRequestClose}
overlayClassName= "react-modal-overlay"
className= "react-modal-content"
>
    <button 
    type="button" 
    onClick={onRequestClose} 
    className="react-modal-close"
    >
        <img src={closeImg} alt="Fechar modal" />
    </button>
    <Container onSubmit={handleCreateNewTransaction}>
    <h2>Cadastrar Transação</h2>
    <input 
    type="text" 
    name="Titulo" 
    placeholder="Titulo"
    value={title}
    onChange={event => setTitle(event.target.value)}
    />
    <input 
    type="number"
    name="Valor"
    placeholder="Valor"
    value={value}
    onChange={event => setValue(Number(event.target.value))}
    />
    <TransactionTypeContainer>
        <RadioBox
        type="button"
        onClick={() => {setType('deposit')}}
        isActive={type === 'deposit'}
        activeColor= 'green'
        >
            <img src={entradas} alt="deposito" />
            <span>Entrada</span>
        </RadioBox>
        <RadioBox
        type="button"
        onClick={() => {setType('withdraw')}}
        isActive={type === 'withdraw'}
        activeColor= 'red'
        >
            <img src={saidas} alt="retirada" />
            <span>Saida</span>
        </RadioBox>
    </TransactionTypeContainer>
    <input 
    type="text" 
    name="Categoria" 
    placeholder="Categoria" 
    value={category}
    onChange={event => setCategory(event.target.value)}
    />
    <button type="submit">Cadastrar</button>
    </Container>
</Modal>
    )
}
