import api from "./api";

export async function userLoader() {
  const res = await api.get("/user/showMe");
  const user = res.data.user;
  const resRestaurant = await api.get("/restaurant");
  const restaurant = resRestaurant.data.restaurant;
  return { user, restaurant };
}

export async function restaurantLoader() {
  const res = await api.get("/restaurant");
  const restaurant = res.data.restaurant;
  return { restaurant };
}

export async function categoryLoader() {
  const res = await api.get(`/category/`);
  const category = res.data.category;
  return { category };
}

export async function featureLoader() {
  const res = await api.get("/feature");
  const feature = res.data.feature;
  const resRestaurant = await api.get("/restaurant?field=name,image");
  const restaurant = resRestaurant.data.restaurant;
  return { feature, restaurant };
}

export async function foodLoader({ params }) {
  const { restaurantId } = params;
  const res = await api.get(`restaurant/${restaurantId}`);
  const food = res.data.restaurant.food;
  const resCategory = await api.get("/category?field=name,image");
  const category = resCategory.data.category;
  return { food, category };
}

export async function orderLoader({ params }) {
  const { restaurantId } = params;
  const res = await api.get(`order/restaurant/${restaurantId}`);
  const order = res.data;
  return { order };
}
