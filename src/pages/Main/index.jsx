import React, { useEffect, useState } from 'react';

//Hooks
import { useColumnConext } from '../../hooks/ColumnContext';
import useData from '../../hooks/useData';

//Components
import Table from '../../components/Table';
import Tools from '../../components/Tools';
import Pagination from '../../components/Pagination';

//Styles
import "./Main.scss";
import SpinnerLoad from '../../components/SpinnerLoad';

const MainPage = () => {
    const { data } = useColumnConext();
    const { load, getData } = useData();

    const [page, setPage] = useState(1);

    useEffect(() => {
        getData(5, page)
    }, [page])
    
    return (
        <div className="main_page">
            <div className="main_page__tools">
                <Tools />
            </div>
            <div className='main_page__content'>
                <Table data={data?.columns} />
                {load && (
                    <div className='main_page__content__loader'>
                        <SpinnerLoad />
                    </div>
                )}
            </div>
            <div className='main_page__pagination'>
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
};

export default MainPage;