import DataTable from "../../Components/DataTable/DataTable";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./List.module.scss";

const List = () => {
    return (
        <div className={styles.list}>
            <Sidebar />

            <div className={styles.listContainer}>
                <Navbar />
                <DataTable />
            </div>
        </div>
    );
};

export default List;
