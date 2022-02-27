import React from "react"
import { Link } from "react-router-dom"
import { ReactComponent as DeleteIcon } from "../assets/svg/deleteIcon.svg"
import bedIcon from "../assets/svg/saloon.png"
import livingroomIcon from "../assets/svg/livingroom.png"

const ListingItem = ({ listing, id, onDelete }) => {
  return (
    <li className="categoryListing">
      <Link
        to={`/category/${listing.type}/${id}`}
        className="categoryListingLink"
      >
        <img
          src={listing.imgUrls[0]}
          alt={listing.name}
          className="categoryListingImg"
        />
        <div className="categoryListingDetails">
            <p className="categoryListingLocation">
                {listing.location}
            </p>
            <p className="categoryListingName">
                {listing.name}
            </p>
            <p className="categoryListingPrice">
            ₺ {listing.offer ? listing.discountedPrice : listing.regularPrice}
                {listing.type === "rent" && " / Month"}
            </p>
            <div className="categoryListingInfoDiv">
                <img src={bedIcon} alt="bed icon" />
                <p className="categoryListingInfoText">
                    {listing.bedrooms > 1
                        ? `${listing.bedrooms} Oda`
                        : "1 Oda"
                    }
                </p>
                <img src={livingroomIcon} alt="bath" />
                <p className="categoryListingInfoText">
                    {listing.bathrooms > 1
                        ? `${listing.bathrooms} Salon`
                        : "1 Salon"
                    }
                </p>

            </div>
        </div>
      </Link>
      {onDelete &&  <DeleteIcon className = "removeIcon" fill= "rgb(231,76,60)" onClick={() => onDelete(id)}/>}
        
    </li>
  )
}

export default ListingItem
