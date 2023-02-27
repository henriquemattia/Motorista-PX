
import './Header.css'

export function Header() {
    return (
        <div className="container-header">
            <div className='title-header'>
                <h1>Crédito</h1>
            </div>

            <div className="balance-header">
                <div>
                    <h2>Saldo disponivel: <span style={{ color: '#00AD17' }}>R$35.500,00</span></h2>
                    <div style={{ gap: '2rem' }}>
                        <span >Aprovisionado: <strong>R$99.700,00</strong></span>
                        <span className='text-red' style={{ marginLeft: '1rem' }} >Dias pendentes <strong>R$30.000,00</strong></span>
                        
                        <p className="utils-header"  >Dias pendentes: <strong>R$30.000,00</strong></p>

                    </div>
                </div>
            </div>
        </div>
    )
}