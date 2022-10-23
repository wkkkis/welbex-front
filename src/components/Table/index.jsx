import React from "react";

//Helpers
import { dateFormatter } from "../../helpers/string.helper";

//Components
import TableTools from "./TableTools";

//Utils
import { tableColumnArr } from "../../utils/constants";

//Styles
import "./Table.scss";

const Table = ({ data }) => {
    return (
        <table className="table">
            <thead className="table__thead">
                <tr className="table__head">
                    {tableColumnArr
                        .sort(function(a, b) {
                            return a.id - b.id;
                        }).map((item, idx) => (
                            <th className="table__th" key={idx}>{item.name}</th>
                        ))
                    }
                </tr>
            </thead>
            <tbody className="table__tbody">
                {data?.map((column, idx) => (
                    <tr className="table__tr" key={idx}>
                        <td className="table__td">
                            <span className="table__value">
                                {dateFormatter(new Date(column.date_creation))}
                            </span>
                        </td>
                        <td className="table__td">
                            <span className="table__value">
                                {column.name_column || "-"}
                            </span>
                        </td>
                        <td className="table__td">
                            <span className="table__value">
                                {column.count || "-"}
                            </span>
                        </td>
                        <td className="table__td">
                            <span className="table__value">
                                {column.distance || "-"}
                            </span>
                        </td>
                        <td className="table__td">
                            <TableTools id={column.id} {...column} />
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
