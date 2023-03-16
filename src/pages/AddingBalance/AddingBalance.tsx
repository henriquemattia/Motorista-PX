import { ChangeEvent, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import UserBalance, { TypeUserBalance } from '../../contexts/UserBalance'

import './AddingBalance.css'

export function AddingBalance() {
    const { balance, setBalance } = useContext<TypeUserBalance>(UserBalance)
    const navigate = useNavigate()
    const [valor, setValor] = useState<string>()

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        // Função que Formata o valor do imput "Valor" para que seja exibido apenas números e exiba no formato da moeda brasileira 'R$ 0.000,00'
        let v: any = event.target.value.replace(/\D/g, '');
        v = (v / 100).toFixed(2) + '';
        v = v.replace(".", ",");
        v = v.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        v = 'R$' + ' ' + v
        event.target.value = v;

        setValor(v);
    };


    function handleClick() { // Função que será chamado quando o usuario clicar no botao para Gerar o QRCode
        if (valor && valor !== 'R$ 0,00') { // Verificando se o campo valor existe E se ele é diferente de R$ 0,00 para que nao seja armazenado valor nenhum no localstorage

            /////// bloco responsável por forçar o armazenmentodo numero total como FLoat(para que tenha casas decimais) pois ele é pré-setado no pdrão de moeda 'R$ 0.000,00'
            const a = valor
            const spli = a.split(" ")
            const b = spli[1].replace(".", "")
            const c = b.split(",")
            const rest = c[1]

            const d = parseFloat(b)
            const e = parseFloat(d + '.' + rest)

            const newBalanceModifield = balance + e

            setBalance(newBalanceModifield)

            navigate('/qrcode')
        } else { // caso o usuario não insira nehum valor ou tente inserir algo que nao sejam numeros, tipo letras e simbolos
            alert('Por favor insira um valor válido')
        }
    }
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
                    <input
                        placeholder='R$ 1.000,00'
                        type="text"
                        // value={valor}
                        onChange={handleChange}
                    />
                </div>


                <div className="buttons-area">
                    <div>
                        <button onClick={() => navigate("/")} className="button-back">Voltar</button>
                        <button onClick={handleClick} className="button-generate orange-500">Gerar QRCode</button>
                    </div>
                </div>
            </div>

        </>
    )
}