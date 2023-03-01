
import { useEffect, useState } from 'react'
import './Header.css'

export function Header() {

    const [initialBalance, setInitialBalance] = useState<number>(35500.00)
    const [addingBalance, setAddingBalance] = useState<any>()
    const [newBalance, setNewBalance] = useState<any>()

    useEffect(() => {

        if (localStorage.getItem('newbalance')) {
            setAddingBalance(localStorage.getItem('newbalance'))
            let num = parseFloat(addingBalance)
            const som = num + initialBalance
            const valorFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(som)
            setNewBalance(valorFormatado)
        }
        else {
            const valorInicialFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(initialBalance)
            setNewBalance(valorInicialFormatado)
            
        }
        
        
    }, [addingBalance])
    

    return (
        <div className="container-header">
            <div className='title-header'>
                <h1>Crédito</h1>
            </div>

            <div className="balance-header">
                <div>
                    <h2>Saldo disponivel: <span style={{ color: '#00AD17' }}>{newBalance}</span></h2>
                    <div style={{ gap: '2rem' }}>
                        <span >Aprovisionado: <strong>R$ 99.700,00</strong></span>
                        <span className='text-red' style={{ marginLeft: '1rem' }} >Dias pendentes <strong>R$ 30.000,00</strong></span>

                        <p className="utils-header"  >Dias pendentes: <strong>R$ 30.000,00</strong></p>

                    </div>
                </div>
            </div>
        </div>
    )
}