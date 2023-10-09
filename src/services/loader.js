import api from "./api";

export async function userLoader() {
  const res = await api.get("/user/showMe");
  const user = res.data.user;
  return { user };
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
