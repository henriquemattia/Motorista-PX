import { useNavigate } from 'react-router-dom'
import './AddingBalance.css'

export function AddingBalance() {
    const navigate = useNavigate()
    return (
        <>
            <div className="container-ballance">

                <p>Adicionar saldo</p>
                <br />
                <br />
                <div className="payment-select">
                    <label className="label-style">Forma de pagamento</label>
                    <div>

                        <select>
                            <option value="">PIX</option>
                        </select>
                    </div>
                </div>

                <div className='value-input'>
                    <label className="label-style">Valor</label>

                    <input placeholder='R$ 1.000,00' />
                </div>


                <div className="buttons-area">
                    <div>
                        <button onClick={() => navigate("/")} className="button-back">Voltar</button>
                        <button onClick={() => navigate("/qrcode")} className="button-generate orange-500">Gerar QRCode</button>
                    </div>
                </div>
            </div>

        </>
    )
}