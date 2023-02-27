import menuSvg from '../../assets/icon-park-outline_menu.svg'
import houseSvg from '../../assets/house.svg'
import moneySvg from '../../assets/money.svg'
import logOutSvg from '../../assets/log-out.svg'

import './Navbar.css'

export function Navbar() {
    return (
        <>
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
        </>
    )
}