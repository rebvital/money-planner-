import { Container, Content } from "./styles";


import imgLogo from '../../assets/logo.svg'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
}

export function Header ({ onOpenNewTransactionModal }: HeaderProps) {

    return (
        <Container>
            <Content>
                <img src={imgLogo} alt="Money Planner" />
                <button type="button" onClick={onOpenNewTransactionModal}>
                    Nova transação
                </button>
                
            </Content>
        </Container>
    )
}