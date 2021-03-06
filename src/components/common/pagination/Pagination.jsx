import React, { useState } from "react";
import styles from "./pagination.module.css";


let Pagination = ({totalUsersCount, pageSize, currentPage, onPageChange, portionSize = 10}) => {
    let pageCount = Math.ceil(totalUsersCount / pageSize);

    let pages = [];

    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber - 1)*portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;
    console.log(portionCount, portionNumber, leftPortionPageNumber, rightPortionPageNumber);
    return (
        <div className={styles.pagination}>
            {portionNumber > 1 && <button onClick={() => {setPortionNumber(portionNumber - 1); onPageChange(portionNumber)}}>Пред.</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map((p) => {
                return (
                    <span key={p}
                        className={currentPage === p && styles.selectedPage}
                        onClick={(e) => {
                            onPageChange(p);
                        }}
                    >
                        {p}
                    </span>
                );
            })}
            {portionCount > portionNumber && <button onClick={() => {setPortionNumber(portionNumber + 1); onPageChange(portionNumber)}}>След.</button>}
        </div>
    );
};

export default Pagination;
