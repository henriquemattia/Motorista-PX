
import menuSvg from '../../assets/icon-park-outline_menu.svg'
import houseSvg from '../../assets/house.svg'
import moneySvg from '../../assets/money.svg'
import logOutSvg from '../../assets/log-out.svg'
import './Dashboard.css'
import { Navbar } from '../../components/Navbar/Navbar'
import { Header } from '../../components/Header/Header'
import { TableContainer } from '../../components/TableContainer/TableContainer'

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