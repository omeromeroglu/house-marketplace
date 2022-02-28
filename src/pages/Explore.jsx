import React from "react"
import { Link } from "react-router-dom"
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg"
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg"
import Slider from "../components/Slider"

const Explore = () => {
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">İlanlar</p>
      </header>
      <main>
        <Slider/>
        <p className="exploreCategoryHeading">Kategoriler</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img src={rentCategoryImage} alt="rent" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Kiralık</p>

            </Link>
            <Link to="/category/sale">
            <img src={sellCategoryImage} alt="sell" className="exploreCategoryImg" />
            <p className="exploreCategoryName">Satılık</p>

            </Link>

        </div>
      </main>
    </div>
  )
}

export default Explore
