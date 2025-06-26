import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./topbar"

const Dashboard = () => {
    return <>        <div id="app-layout">
        {/* topbar open */}
       <Topbar></Topbar>
        {/* topbar end */}
        {/* <!-- Left Sidebar Start --> */}
      <Sidebar></Sidebar>
        {/* <!-- Left Sidebar End --> */}
       <Outlet></Outlet>
    </div>

    </>
}
export default Dashboard