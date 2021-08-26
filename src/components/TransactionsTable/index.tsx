import { Container } from "./styles";

export function TransactionsTable() {
    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>€ 300.00</td>
                        <td>desenvolvimento</td>
                        <td>20/02/2020</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>€ 300.00</td>
                        <td>desenvolvimento</td>
                        <td>20/02/2020</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td>€ 300.00</td>
                        <td>desenvolvimento</td>
                        <td>20/02/2020</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}