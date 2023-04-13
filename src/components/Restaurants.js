import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";

const Restaurants = () => {
  return (
    <div className="restaurants-container">
      {restaurantList.map((restaurant) => (
        <RestaurantCard key={restaurant.data.id} restaurantData={restaurant} />
      ))}
    </div>
  );
};

export default Restaurants;
