import { RESTAURANT_LOGO_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restaurantData } = props;
  const {
    name,
    cuisines,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
    costForTwo,
  } = restaurantData?.data;

  return (
    <div className="restaurant-card">
      <img
        alt="restaurant logo"
        className="restaurant-logo"
        src={RESTAURANT_LOGO_CDN_URL + cloudinaryImageId}
      />
      <span className="restaurant-name">{name}</span>
      <span className="cuisines">{cuisines.join(", ")}</span>
      <div className="rating-delivery-cost">
        <span className="restaurant-rating">{avgRating} ★</span>
        <span>•</span>
        <p>{deliveryTime} MINS</p>
        <span>•</span>
        <p>₹{costForTwo / 100} FOR TWO</p>
      </div>
    </div>
  );
};

export default RestaurantCard;
