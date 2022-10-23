import React from 'react';

//Hooks
import { DOTS, usePagination } from '../../hooks/usePagination';

//Styles
import "./Pagination.scss"

const Pagination = ({
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize
  });

  if (currentPage === 0 || paginationRange?.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange?.length - 1];

  return (
    <ul
      className='pagination_container'
    >
      <li
        className={`pagination_container__item ${
            currentPage === 1 ? "disabled" : ""
          }`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li className="pagination_container__item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagination_container__item ${
                pageNumber === currentPage ? "selected" : ""
              }`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={`pagination_container__item ${
            currentPage === lastPage ? "disabled" : ""
          }`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};

export default Pagination;