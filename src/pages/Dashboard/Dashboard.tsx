import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { TableContainer } from '../../components/TableContainer/TableContainer'

import './Dashboard.css'

export function Dashboard() {
    return (
            <div className="dashBoard-container">
                <Navbar />  {/* Barra de navegação lateral esquerda  */}

                <main> {/*Conteudo principal da página */}

                    <Header /> {/* Header */}

                    <section className="table-section"> {/* Secção princiapl com a tabela*/}
                        <TableContainer />
                    </section>
                </main>

            </div>
    )
}