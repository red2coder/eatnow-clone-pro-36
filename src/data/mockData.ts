
import { Category, MenuItem } from "@/types";

export const categories: Category[] = [
  { id: "all", name: "All" },
  { id: "starters", name: "Starters" },
  { id: "main", name: "Main Dishes" },
  { id: "sides", name: "Side Dishes" },
  { id: "desserts", name: "Desserts" },
  { id: "drinks", name: "Drinks" },
];

export const menuItems: MenuItem[] = [
  {
    id: "1",
    name: "Moroccan Salad",
    description: "Fresh vegetables with olive oil and Moroccan spices",
    price: 35,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "starters",
  },
  {
    id: "2",
    name: "Zaalouk",
    description: "Cooked eggplant and tomato dip with bread",
    price: 45,
    image: "https://images.unsplash.com/photo-1601314212732-047d4bdffd22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "starters",
  },
  {
    id: "3",
    name: "Classic Tajine",
    description: "Slow-cooked stew with tender meat and vegetables",
    price: 120,
    image: "https://images.unsplash.com/photo-1567982047351-76b6f93e38ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "main",
  },
  {
    id: "4",
    name: "Couscous Royal",
    description: "Traditional couscous with seven vegetables and meat",
    price: 130,
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "main",
  },
  {
    id: "5",
    name: "Pastilla",
    description: "Sweet and savory pie with chicken and almonds",
    price: 110,
    image: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "main",
  },
  {
    id: "6",
    name: "Moroccan Rice",
    description: "Fragrant rice with saffron and vegetables",
    price: 40,
    image: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "sides",
  },
  {
    id: "7",
    name: "Moroccan Bread",
    description: "Traditional freshly baked Khobz bread",
    price: 15,
    image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "sides",
  },
  {
    id: "8",
    name: "Baklava",
    description: "Sweet pastry made of layers of filo with chopped nuts",
    price: 55,
    image: "https://images.unsplash.com/photo-1631778068000-ae5ad56654ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "desserts",
  },
  {
    id: "9",
    name: "Moroccan Mint Tea",
    description: "Refreshing sweet mint tea, traditional Moroccan style",
    price: 25,
    image: "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "drinks",
  },
  {
    id: "10",
    name: "Fresh Orange Juice",
    description: "Freshly squeezed orange juice",
    price: 30,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "drinks",
  },
  {
    id: "11",
    name: "Chebakia",
    description: "Moroccan sesame cookies shaped into flowers and soaked in honey",
    price: 45,
    image: "https://images.unsplash.com/photo-1558326567-98ae2405596b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "desserts",
  },
  {
    id: "12",
    name: "Harira Soup",
    description: "Traditional Moroccan soup with tomatoes, lentils, chickpeas, and spices",
    price: 50,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80",
    categoryId: "starters",
  }
];
