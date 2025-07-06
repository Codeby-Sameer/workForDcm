import { Outlet } from "react-router-dom"
import Sidebar from "./Sidebar"
import Topbar from "./topbar"

 // Assuming you have a CSS file for styling the profile sidebar
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