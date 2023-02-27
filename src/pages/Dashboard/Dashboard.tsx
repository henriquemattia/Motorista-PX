
import menuSvg from '../../assets/icon-park-outline_menu.svg'
import houseSvg from '../../assets/house.svg'
import moneySvg from '../../assets/money.svg'
import logOutSvg from '../../assets/log-out.svg'
import './Dashboard.css'

export function Dashboard() {
    return (
        <div className="dashBoard-container">
            <nav>  {/* Barra de navegação lateral esquerda  */}
                <div className='nav-bar'>
                    <div className='nav-bar_top'>
                        <div>
                            <img src={menuSvg} className="menu-svg" alt="ícone de menu" />

                            <img src={houseSvg} className="house-svg" alt="ícoone de uma casa" />
                        </div>

                        <span />
                    </div>

                    <div className='nav-bar_botton'>
                            <img src={moneySvg} className="money-svg" alt="" />
                            <img src={logOutSvg} className="logOut-svg" alt="" />
                    </div>
                </div>
            </nav>

            <main> {/*Conteudo principal da página */}
                <header> {/*Cabeçalho do dashboard */}
                    <p>Henader</p>
                </header>

                <section className=""> {/* Secção princiapl com a tabela*/}
                    <p>section</p>
                </section>
            </main>

        </div>
    )
}