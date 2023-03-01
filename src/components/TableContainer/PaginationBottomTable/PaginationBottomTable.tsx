
import { useState } from 'react'
import leftSvg from '../../../assets/Pagination-Left.svg'
import rightSvg from '../../../assets/Pagination-Right.svg'

import './PaginationBottomTable.css'

export function PaginationBottomTable() {
    const [page1, setPage1] = useState(true)
    function firstPaginator() {
        setPage1(true)
    }
    function secondPaginator() {
        setPage1(false)
    }
    return (
        <div className="pagination-container">

            <img onClick={firstPaginator} className="pagination-svg" src={leftSvg} alt="" />
            {page1 == true ?
                <>
                    <button onClick={firstPaginator} className="pagination-number page-selected">01</button>
                    <button onClick={secondPaginator} className="pagination-number page-not-selected">02</button>
                </>
                : <>
                    <button onClick={firstPaginator} className="pagination-number page-not-selected">01</button>
                    <button onClick={secondPaginator} className="pagination-number  page-selected">02</button>
                </>
            }
            <img onClick={secondPaginator} className="pagination-svg" src={rightSvg} alt="" />

        </div>
    )
}