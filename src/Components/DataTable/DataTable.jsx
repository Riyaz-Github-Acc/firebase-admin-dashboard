import { useState } from "react";
import { Link } from "react-router-dom";

// MUI Data Table
import { DataGrid } from "@mui/x-data-grid";

// DataTable Source
import { userColumns, userRows } from "./DataTableSource";

// CSS
import styles from "./DataTable.module.scss";

const DataTable = () => {
    const [data, setData] = useState(userRows);

    const deleteHandler = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn = [
        {
            field: "action",
            headerName: "Action",
            width: "250",
            renderCell: (params) => {
                return (
                    <div className={styles.cellAction}>
                        <Link to="/users/test">
                            <div className={styles.viewButton}>View</div>
                        </Link>
                        <div
                            className={styles.deleteButton}
                            onClick={() => deleteHandler(params.row.id)}>
                            Delete
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className={styles.dataTable}>
            <div className={styles.addButton}>
                <Link to="/users/new">
                    <button>+ Add New</button>
                </Link>
            </div>

            <DataGrid
                rows={data}
                columns={userColumns.concat(actionColumn)}
                initialState={{
                    pagination: {
                        paginationModel: { page: 0, pageSize: 5 },
                    },
                }}
                pageSizeOptions={[5, 10]}
                checkboxSelection
            />
        </div>
    );
};

export default DataTable;
