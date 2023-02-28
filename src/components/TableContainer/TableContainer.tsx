
import './TableContainer.css'

import calendar from '../../assets/akar-icons_calendar.svg'
import search from '../../assets/icon-park-outline_search.svg'
import { Table } from '../Table/Table'

export function TableContainer (){
    return (
        <>
            <div className="top-table">
                <div className="top-table_left">

                    <div className="utils-container">
                        <span>Pesquisar</span>
                        <img src={search} alt="ícone de pesquisa" />
                    </div>
                    <div className="utils-container">
                    <span>Pesquisar data</span>
                        <img src={calendar} alt="ícone de pesquisa" />
                    </div>
                </div>

                <div  className="top-table_right">
                    <button>Adicionar saldo</button>
                </div>
            </div>

            <div className="mid-table">
                <Table />
            </div>
            <div className="bottom-table">INDICATORS</div>
        </>
    )
}