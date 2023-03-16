
import { useContext, useEffect, useState } from 'react'
import UserBalance, { TypeUserBalance } from '../../contexts/UserBalance'
import './Header.css'

 

export function Header() {
    const { balance } = useContext<TypeUserBalance>(UserBalance) 
    const [newBalance, setNewBalance] = useState(balance) 

    const finalValue = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(newBalance)

    return (
        <div className="container-header">
            <div className='title-header'>
                <h1>Crédito</h1>
            </div>

            <div className="balance-header">
                <div>
                    <h2>Saldo disponivel: <span style={{ color: '#00AD17' }}>{finalValue}</span></h2>
                    <div style={{ gap: '2rem' }}>
                        <span >Aprovisionado: <strong>R$ 99.700,00</strong></span>
                        <span className='text-red' style={{ marginLeft: '1rem' }} >Dias pendentes <strong>R$ 30.000,00</strong></span>
                        
                        <p className="utils-header"  >Dias pendentes: <strong>R$ 30.000,00</strong></p> {/*Só vai aparecer na versão mobile */}
                    </div>
                </div>
            </div>
        </div>
    )
}