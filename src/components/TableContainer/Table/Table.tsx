import copySvg from '../../../assets/icon-park-outline_copy-2.svg'
import codeSvg from '../../../assets/icon-park-outline_pay-code-one.svg'
import sortSvg from '../../../assets/Sort.svg'

import './Table.css'

export function Table() {
    return (
        <div className="table">
            <table>
                <thead>
                    <tr>
                        <th scope="col"><div>ID <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Destino <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Valor <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Solicitação <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Forma pgto. <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Vencimento <img src={sortSvg} alt="" /></div></th>
                        <th scope="col"><div>Status <img src={sortSvg} alt="" /></div></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label="ID">4145</td>
                        <td data-label="Destino">Despesa</td>
                        <td data-label="Valor">R$50,00</td>
                        <td data-label="Solicitação" className="space">28/12/2022 23:30</td>
                        <td data-label="Forma pgto.">PIX/Ted</td>
                        <td data-label="Vencimento">28/02/2022</td>
                        <td data-label="Status"><div className="badge">Em progresso</div></td>
                        <td>
                            <div className="icons-container">
                                <img className="s-svg" src={copySvg} alt="" />
                                <img className="s-svg" src={codeSvg} alt="" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td data-label="ID">4145</td>
                        <td data-label="Destino">Despesa</td>
                        <td data-label="Valor">R$50,00</td>
                        <td data-label="Solicitação" className="space">28/12/2022 23:30</td>
                        <td data-label="Forma pgto.">PIX/Ted</td>
                        <td data-label="Vencimento">28/02/2022</td>
                        <td data-label="Status"><div className="badge">Em progresso</div></td>
                        <td>
                            <div className="icons-container">
                                <img className="s-svg" src={copySvg} alt="" />
                                <img className="s-svg" src={codeSvg} alt="" />
                            </div>
                        </td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}