import { Link } from "react-router-dom";

// MUI Icons
import {
    Dashboard,
    PeopleAlt,
    ShoppingBasket,
    Inventory,
    LocalShipping,
    TableChart,
    Notifications,
    SettingsSystemDaydream,
    Psychology,
    AdminPanelSettings,
    AccountCircle,
    ExitToApp,
} from "@mui/icons-material";

// CSS
import styles from "./Sidebar.module.scss";

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div className={styles.top}>
                <Link to="/">
                    <div className={styles.logo}>MBA Admin</div>
                </Link>
            </div>
            <hr />

            <div className={styles.middle}>
                <ul>
                    <p className={styles.title}>MAIN</p>

                    <Link to="/">
                        <li>
                            <Dashboard className={styles.icon} />
                            <span>Dashboard</span>
                        </li>
                    </Link>

                    <p className={styles.title}>LISTS</p>

                    <Link to="/users">
                        <li>
                            <PeopleAlt className={styles.icon} />
                            <span>Users</span>
                        </li>
                    </Link>

                    <Link to="/products">
                        <li>
                            <ShoppingBasket className={styles.icon} />
                            <span>Products</span>
                        </li>
                    </Link>

                    <li>
                        <Inventory className={styles.icon} />
                        <span>Orders</span>
                    </li>
                    <li>
                        <LocalShipping className={styles.icon} />
                        <span>Delivery</span>
                    </li>

                    <p className={styles.title}>USEFUL</p>
                    <li>
                        <TableChart className={styles.icon} />
                        <span>Stats</span>
                    </li>
                    <li>
                        <Notifications className={styles.icon} />
                        <span>Notifications</span>
                    </li>

                    <p className={styles.title}>SERVICE</p>
                    <li>
                        <SettingsSystemDaydream className={styles.icon} />
                        <span>System Health</span>
                    </li>
                    <li>
                        <Psychology className={styles.icon} />
                        <span>Logs</span>
                    </li>
                    <li>
                        <AdminPanelSettings className={styles.icon} />
                        <span>Settings</span>
                    </li>

                    <p className={styles.title}>USER</p>
                    <li>
                        <AccountCircle className={styles.icon} />
                        <span>Profile</span>
                    </li>
                    <li>
                        <ExitToApp className={styles.icon} />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
