import React from "react";
import RestaurantForm from "../../../components/RestaurantForm";
import {
  useNavigate,
  useParams,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import api from "../../../services/api";

function UpdateRestaurant() {
  const navigate = useNavigate();
  const submit = useSubmit();
  const { restaurant, category } = useRouteLoaderData("root");
  const { restaurantId } = useParams();
  const fileredRestaurant = restaurant.filter(
    (item) => item._id === restaurantId
  );
  console.log(restaurantId);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      await api.patch(`restaurant/${restaurantId}`, values);
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      submit(values, { method: "patch" });
    }
  };
  return (
    <div>
      <RestaurantForm
        data={fileredRestaurant[0]}
        onSubmit={handleSubmit}
        categoryData={category}
      />
    </div>
  );
}

export default UpdateRestaurant;
