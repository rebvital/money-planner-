import { Container } from "./styles";
import entradas from '../../assets/Entradas.svg'
import saidas from '../../assets/Saídas.svg'
import total from '../../assets/Total.svg'

export function Summary() {
    return(
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={entradas} alt="entradas" />
                </header>
                <strong>€500,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={saidas} alt="Saidas" />
                </header>
                <strong> - €300,00</strong>
            </div>
            <div className="green">
                <header>
                    <p>Total</p>
                    <img src={total} alt="Total" />
                </header>
                <strong>€200,00</strong>
            </div>
        </Container>
    )
}