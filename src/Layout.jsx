import {Outlet} from "react-router"

// This layout places the Welcome nav at the top of every page
export default function Layout() {
  return (
    <>
      <div className="nav">
        Welcome!
      </div>

      <Outlet />
    </>
  )
}