import React, { useState } from "react";
import styles from "./pagination.module.css";
import Pagination from '@material-ui/lab/Pagination';

let PaginationContainer = ({totalUsersCount, pageSize, currentPage, onPageChange}) => {

    let pageCount = Math.ceil(totalUsersCount / pageSize);

    const [page, setPage] = useState(currentPage);

    const handleChange = (event, value) => {
      setPage(value);
      onPageChange(value)
    };

    return (
        <div className={styles.pagination}>
            <Pagination variant="outlined" count={pageCount} boundaryCount={2} siblingCount={2} page={page} onChange={handleChange} color="secondary"/>
        </div>
    );
};

export default PaginationContainer;
