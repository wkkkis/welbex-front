import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useLocation, useSearchParams } from "react-router-dom";

//Hooks
import { useColumnConext } from '../../hooks/ColumnContext';
import useData from '../../hooks/useData';

//Components
import Table from '../../components/Table';
import Tools from '../../components/Tools';
import Pagination from '../../components/Pagination';
import SpinnerLoad from '../../components/SpinnerLoad';

//Styles
import "./Search.scss"

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();

    const { data } = useColumnConext();
    const { load, getDataWithFilter } = useData();

    const [page, setPage] = useState(1);

    useEffect(() => {
        if (
            searchParams.get("value") && 
            searchParams.get("column") && 
            searchParams.get("type")
        ) {
            const searchOptions = {
                column: searchParams.get("column"),
                type: searchParams.get("type"),
                value: searchParams.get("value")
            }
            getDataWithFilter(searchOptions, page)
        }
    }, [location, page])

    return (
        <div className="search_page">
            <div className="search_page__tools">
                <Tools />
            </div>
            <div className='search_page__content'>
                <Table data={data?.columns} />
                {load && (
                    <div className='search_page__content__loader'>
                        <SpinnerLoad />
                    </div>
                )}
            </div>
            <div className='search_page__pagination'>
                {data?.limit < data?.totalCount ? (
                    <Pagination
                        currentPage={page}
                        totalCount={data?.totalCount}
                        pageSize={data?.limit}
                        onPageChange={(page) => setPage(page)}
                    />
                ) : null}
            </div>
        </div>
    )
}

export default Search