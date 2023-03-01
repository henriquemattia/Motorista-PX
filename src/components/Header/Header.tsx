
import { useEffect, useState } from 'react'
import './Header.css'

export function Header() {

    const [initialBalance, setInitialBalance] = useState<string>('35500.00')
    // let balance = initialBalance.toString()
    localStorage.setItem("balance", initialBalance)

    const [newBalance, setNewBalance] = useState<any >()
    const [newBalance2, setNewBalance2] = useState<any >()

    if(localStorage.getItem("newbalance")){
        useEffect(() => {
            setNewBalance2(localStorage.getItem("newbalance"))
            localStorage.setItem("balance", newBalance2)
        }, [])
    }
    else {
        useEffect(()=>{
            const valorFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(initialBalance)
            setNewBalance(valorFormatado)
        })
    }
    // const [addingBalance, setAddingBalance] = useState<any>()
    // const [newBalance, setNewBalance] = useState<any>()

    // useEffect(() => {
    //     if (localStorage.getItem('newbalance')) {
    //         setAddingBalance(localStorage.getItem('newbalance'))
    //         let num = parseFloat(addingBalance)
    //         const som = num + initialBalance
    //         const valorFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(som)
    //         setNewBalance(valorFormatado)
    //     }
    //     else {
    //         const valorInicialFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(initialBalance)
    //         setNewBalance(valorInicialFormatado)
    //     }
    // }, [addingBalance])
    

    return (
        <div className="container-header">
            <div className='title-header'>
                <h1>Crédito</h1>
            </div>

            <div className="balance-header">
                <div>
                    <h2>Saldo disponivel: <span style={{ color: '#00AD17' }}>{newBalance2}</span></h2>
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