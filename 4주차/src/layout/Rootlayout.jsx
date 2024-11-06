import {Outlet} from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import './RootLayout.css'; 

const RootLayout = () => {
    return (
        <>
            <Navbar />
            <div className="layout-container">
                <Sidebar className="sidebar" />
                <main className="content-area">
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default RootLayout;
