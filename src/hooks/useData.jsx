import { useState } from "react";

//Helpers
import { instance } from "../helpers/api";
import { useColumnConext } from "./ColumnContext";

const useData = () => {
    const { data, saveData } = useColumnConext()
    const [load, setLoad] = useState(false);
    const [error, setError] = useState(null);

    const filterData = async (filterOption) => {
        let filteredData = null;
        switch (filterOption.type) {
            case "equals":
                filteredData = [...data.columns].filter((columns) => columns[filterOption.column] === filterOption.value);
                break;
            case "contains": 
                filteredData = [...data.columns].filter((columns) => columns[filterOption.column].includes(filterOption.value));
                break;
            case "more": 
                filteredData = [...data.columns].filter((columns) => columns[filterOption.column] > filterOption.value);
                break;
            case "less":
                filteredData = [...data.columns].filter((columns) => columns[filterOption.column] < filterOption.value);
                break;
            default: 
                return data;
        }

        saveData({
            columns: filteredData
        })
    };

    const getDataWithFilter = async (filterObj, offset = 1, limit = 5) => {
        try {
            setLoad(true);
            const res = await instance.post(
                `/column/search?page=${offset}&size=${limit}`,
                filterObj
            );
            setLoad(false);

            saveData(res?.data);
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    const getData = async (limit = 10, offset = 1) => {
        try {
            setLoad(true);
            const res = await instance.get(
                `/column?page=${offset}&size=${limit}`
            );
            setLoad(false);

            saveData(res?.data);
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    const getOneData = async (id) => {
        try {
            setLoad(true);
            const res = await instance.get(`/column/${id}`);
            setLoad(false);

            saveData(res?.data)
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    const createData = async (obj) => {
        try {
            setLoad(true);
            const res = await instance.post(`/column?`, obj);
            setLoad(false);
            
            getData()
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    const updateData = async (obj, id) => {
        try {
            setLoad(true);
            const res = await instance.put(`/column/${id}`, obj);
            setLoad(false);

            getData()
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    const deleteData = async (id) => {
        try {
            setLoad(true);
            const res = await instance.delete(`/column/${id}`);
            setLoad(false);

            getData()
            return res.data;
        } catch (err) {
            setError(err.response.data.error);
            throw new Error(err.response.data.error);
        }
    };

    return {
        data,
        load,
        error,
        filterData,
        getDataWithFilter,
        getData,
        getOneData,
        createData,
        updateData,
        deleteData,
    };
};

export default useData;
