import { Container, Content } from "./styles";

import imgLogo from '../../assets/logo.svg'

export function Header () {
    return (
        <Container>
            <Content>
                <img src={imgLogo} alt="Money Planner" />
                <button type="button">
                    Nova transação
                </button>
            </Content>
        </Container>
    )
}