import products from "@/data/products.json";

export function getSingleProduct(id) {
  return products.find((p) => p.id == id);
}