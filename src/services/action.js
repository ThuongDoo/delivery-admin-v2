import { redirect } from "react-router-dom";
import api from "../services/api";

// const async function
export async function categoryAction() {
  console.log("create");
  return redirect("../");
}

export async function featureAction() {
  return redirect("../");
}

export async function restaurantAction() {
  return redirect("/");
}

export async function foodAction() {
  return redirect("../");
}

export async function orderAction() {
  return redirect("../");
}

export async function deleteRestaurantAction({ request }) {
  const formData = await request.formData();
  const id = formData.get("restaurantId");
  await api.delete(`/restaurant/${id}`);
  return redirect("/");
}
