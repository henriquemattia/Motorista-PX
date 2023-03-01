import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './AddingBalance.css'

export function AddingBalance() {
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

    const [balancedModifield, setBalancedModiefield] = useState<any>()
    useEffect(() => {
        function balanceATT() {

        }
        balanceATT()

    }, [balancedModifield])

    function handleClick() { // Função que será chamado quando o usuario clicar no botao para GErar o QRCode
        if (valor && valor !== 'R$ 0,00') { // Verificando se o campo valor existe e se ele é diferente de R$ 0,00 para que nao seja armazenado valor nehum no localstorage
            if (localStorage.getItem("balance-modifield")) {
                const saa = localStorage.getItem("balance-modifield") as any


                const balancedModifieldNumber = parseFloat(saa)
                console.log(balancedModifieldNumber);




                const a = valor
                const spli = a.split(" ")
                const b = spli[1].replace(".", "")
                const c = b.split(",")
                const rest = c[1]

                const d = parseFloat(b)
                const e = parseFloat(d + '.' + rest)

                const newBalanceModifield = balancedModifieldNumber + e


                localStorage.setItem('newbalance', `${newBalanceModifield}`)

                navigate('/qrcode')
            } else {

                const a = valor
                const spli = a.split(" ")
                const b = spli[1].replace(".", "")
                const c = b.split(",")
                const rest = c[1]

                const d = parseFloat(b)
                // const e = d + '.' + rest
                const e = parseFloat(d + '.' + rest)
                let f = localStorage.getItem('balance') as any
                const g = parseFloat(f)
                const sum = g + e
                const valorInicialFormatado = Intl.NumberFormat('pt-br', { style: 'currency', currency: 'BRL' }).format(sum)
                //         setNewBalance(valorInicialFormatado)


                localStorage.setItem('newbalance', `${sum}`)

                navigate('/qrcode')
            }
            // Lógica responsavel por formatar o valor inserido pelo usuario e transformala em um FLOAT para que seja armazenado da forma necessaria no localStorage
        } else { // caso o usuario não insira nehum valor ou tente inserir algo que nao sejam numeros, tipo letras e simbolos
            alert('Por Favor ensira um valor valido')
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