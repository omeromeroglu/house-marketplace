import React from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { ReactComponent as OfferIcon } from "../assets/svg/localOfferIcon.svg"
import { ReactComponent as ExploreIcon } from "../assets/svg/exploreIcon.svg"
import { ReactComponent as PersonOutlineIcon } from "../assets/svg/personOutlineIcon.svg"
import  useAuthStatus  from "../hooks/useAuthStatus"


const Navbar = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const pathMatchRoute = (route) => {
    if (route === location.pathname) {
      return true
    }
  }

  const { loggedIn,checkingStatus } = useAuthStatus()


  return (
    <footer className="navbar">
      <nav className="navbarNav">
        <ul className="navbarListItems">
          <li className="navbarListItem" onClick={() => navigate("/")}>
            <OfferIcon
              fill={pathMatchRoute("/") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              İlanlar 
            </p>
          </li>

          
          <li className="navbarListItem" onClick={() => navigate("/about")}>
            <PersonOutlineIcon
              fill={pathMatchRoute("/about") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/about")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Hakkımda
            </p>
          </li>
          {/* Visible only after Signin as admin panel */}
          {loggedIn && <li className="navbarListItem" onClick={() => navigate("/profile")}>
            <ExploreIcon
              fill={pathMatchRoute("/profile") ? "#2c2c2c" : "#8f8f8f"}
              width="36px"
              height="36px"
            />
            <p
              className={
                pathMatchRoute("/profile")
                  ? "navbarListItemNameActive"
                  : "navbarListItemName"
              }
            >
              Panel
            </p>
          </li>
}
        </ul>
      </nav>
    </footer>
  )
}

export default Navbar
