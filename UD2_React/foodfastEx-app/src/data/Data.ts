import type { ICategory, IProduct } from "../types/Interfaces";

export const products: IProduct[] = [

  // 1 - OFERTAS

  {
    id: 1,
    categoryId: 1,
    title: "Menú Ahorro Big Burger",
    imageUrl: "https://mcdonalds.es/api/cms/images/aPdeCrpReVYa3gnV_BigMac_580x258.jpg",
    price: 6.9,
    ingredients: [
      "Pan de sésamo",
      "Carne de vacuno",
      "Queso cheddar",
      "Lechuga"
    ],
    allergens: ["Gluten", "Lácteos", "Sésamo", "Soja"]
  },
  {
    id: 2,
    categoryId: 1,
    title: "Doble Cheese Ahorro",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z8AsPp7c43Q3gSw5_Hero-ofertas_desk.png",
    price: 5.5,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Pepinillos"
    ],
    allergens: ["Gluten", "Lácteos", "Mostaza"]
  },
  {
    id: 3,
    categoryId: 1,
    title: "Menú Crispy Chicken Deal",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meCZbqstJ99jCp_McCrispy-Original.png",
    price: 6.2,
    ingredients: [
      "Pan de trigo",
      "Pollo",
      "Lechuga",
      "Queso cheddar"
    ],
    allergens: ["Gluten", "Huevo", "Lácteos"]
  },
  {
    id: 4,
    categoryId: 1,
    title: "Pack 10 Nuggets + Patatas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z7SBrp7c43Q3f6gX_Hero-complementos_desk.png",
    price: 5.9,
    ingredients: [
      "Pollo",
      "Pan de trigo",
      "Patata"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 5,
    categoryId: 1,
    title: "Menú Infantil Ahorro",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z8AxPp7c43Q3gS3Z_Hero-happymeal_desk.png",
    price: 4.9,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Patata"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 6,
    categoryId: 1,
    title: "Duo Burger para Compartir",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z8Avxp7c43Q3gS2V_Hero-postres_desk.png",
    price: 9.9,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Lechuga"
    ],
    allergens: ["Gluten", "Lácteos"]
  },
  {
    id: 7,
    categoryId: 1,
    title: "2 McFlurry al Precio de 1",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41EV5bqstJ99nSt_McFlurry_Cristal_oreo_chocolate.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.5,
    ingredients: [
      "Helado de leche",
      "Sirope de chocolate",
      "Sirope de caramelo"
    ],
    allergens: ["Lácteos", "Gluten"]
  },
  {
    id: 8,
    categoryId: 1,
    title: "Café + Donut Oferta",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M4JbqstJ99nUT_Cafe%CC%81CaramelLattev2.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.2,
    ingredients: [
      "Café",
      "Leche",
      "Pan de trigo"
    ],
    allergens: ["Gluten", "Lácteos", "Huevo"]
  },

  // 2 - NOVEDADES

  {
    id: 9,
    categoryId: 2,
    title: "Burger Trufada Deluxe",
    imageUrl: "https://mcdonalds.es/api/cms/images/aOS4Op5xUNkB1qmg_McExtreme-Bulled-Pork-Doble-3-.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 8.5,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Cebolla"
    ],
    allergens: ["Gluten", "Lácteos", "Soja"]
  },
  {
    id: 10,
    categoryId: 2,
    title: "Crispy Chicken Spicy",
    imageUrl: "https://mcdonalds.es/api/cms/images/aLWkd2GNHVfTOfmP_McCrispy-BBQ-Bacon.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 7.2,
    ingredients: [
      "Pan de trigo",
      "Pollo",
      "Lechuga"
    ],
    allergens: ["Gluten", "Huevo"]
  },
  {
    id: 11,
    categoryId: 2,
    title: "Veggie Burger Mediterránea",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4md_pbqstJ99jCe_Chicken-Mayo.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 7.9,
    ingredients: [
      "Pan de trigo",
      "Lechuga",
      "Tomate"
    ],
    allergens: ["Gluten", "Sésamo"]
  },
  {
    id: 12,
    categoryId: 2,
    title: "Wrap de Pollo BBQ",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meFZbqstJ99jC1_McWrap-Chicken.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 6.8,
    ingredients: [
      "Pan de trigo",
      "Pollo",
      "Queso cheddar"
    ],
    allergens: ["Gluten", "Lácteos"]
  },
  {
    id: 13,
    categoryId: 2,
    title: "Patatas Gajo Especiadas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4D5bqstJ99mgf_Patatas_pequen%CC%83as_deluxe.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.1,
    ingredients: [
      "Patata"
    ],
    allergens: []
  },
  {
    id: 14,
    categoryId: 2,
    title: "Helado Cookie Crunch",
    imageUrl: "https://mcdonalds.es/api/cms/images/aJ2Wh6Tt2nPbaTxJ_McFlurry_Cristal_Chips-Ahoy-chocolate.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.3,
    ingredients: [
      "Helado de leche",
      "Sirope de chocolate",
      "Sirope de caramelo"
    ],
    allergens: ["Lácteos", "Gluten", "Huevo"]
  },
  {
    id: 15,
    categoryId: 2,
    title: "Batido de Oreo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M6pbqstJ99nUd_ChocolatecalienteNesquik.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.8,
    ingredients: [
      "Helado de leche",
      "Leche",
      "Sirope de chocolate"
    ],
    allergens: ["Lácteos", "Gluten", "Soja"]
  },
  {
    id: 16,
    categoryId: 2,
    title: "Limonada Frozen",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M-5bqstJ99nUu_Teverde.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.5,
    ingredients: [
      "Agua" // si quieres ceñirte solo a los 15, cámbiala por "Leche" o "Café"
    ],
    allergens: []
  },


  // 3 - HAMBURGUESAS

  {
    id: 17,
    categoryId: 3,
    title: "Big Mac®",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4j2nZbqstJ99hru_Big-Mac.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.9,
    ingredients: [
      "Pan de sésamo",
      "Carne de vacuno",
      "Queso cheddar",
      "Lechuga"
    ],
    allergens: ["Gluten", "Sésamo", "Lácteos", "Mostaza", "Sulfitos"]
  },
  {
    id: 18,
    categoryId: 3,
    title: "Cuarto de Libra",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meAZbqstJ99jCh_Cuarto-de-Libra.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.5,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Cebolla"
    ],
    allergens: ["Gluten", "Lácteos", "Mostaza"]
  },
  {
    id: 19,
    categoryId: 3,
    title: "Cuarto de Libra Doble",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meAJbqstJ99jCg_Cuarto-de-Libra-Doble.png?rect=0,0,450,450&auto=compress&fm=webpe",
    price: 6.9,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Cebolla"
    ],
    allergens: ["Gluten", "Lácteos", "Mostaza"]
  },
  {
    id: 20,
    categoryId: 3,
    title: "McRoyal Deluxe®",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meFJbqstJ99jC0_McRoyal-Deluxe.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 6.5,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Tomate"
    ],
    allergens: ["Gluten", "Lácteos", "Huevo"]
  },
  {
    id: 21,
    categoryId: 3,
    title: "Cheeseburger",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4md-ZbqstJ99jCZ_Cheeseburger.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.2,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar",
      "Pepinillos"
    ],
    allergens: ["Gluten", "Lácteos", "Mostaza"]
  },
  {
    id: 22,
    categoryId: 3,
    title: "Hamburguesa Simple",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meBJbqstJ99jCk_HamburguesaHappyMeal.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.7,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno"
    ],
    allergens: ["Gluten", "Mostaza"]
  },
  {
    id: 23,
    categoryId: 3,
    title: "Crispy Chicken Burger",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meCZbqstJ99jCp_McCrispy-Original.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 4.9,
    ingredients: [
      "Pan de trigo",
      "Pollo",
      "Lechuga"
    ],
    allergens: ["Gluten", "Huevo"]
  },
  {
    id: 24,
    categoryId: 3,
    title: "Veggie Burger",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4md-pbqstJ99jCa_ChickenBurgerKids.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.3,
    ingredients: [
      "Pan de trigo",
      "Lechuga",
      "Tomate"
    ],
    allergens: ["Gluten", "Soja"]
  },


  // 4 - COMPLEMENTOS Y MÁSXMENOS

  {
    id: 25,
    categoryId: 4,
    title: "Patatas Fritas Pequeñas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z7cgwZ7c43Q3gAxV_Patatas-Peque%C3%B1as.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.9,
    ingredients: [
      "Patata"
    ],
    allergens: []
  },
  {
    id: 26,
    categoryId: 4,
    title: "Patatas Fritas Medianas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4EZbqstJ99mgh_Patatas-Medianas.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.3,
    ingredients: [
      "Patata"
    ],
    allergens: []
  },
  {
    id: 27,
    categoryId: 4,
    title: "Patatas Deluxe",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4D5bqstJ99mgf_Patatas_pequen%CC%83as_deluxe.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.7,
    ingredients: [
      "Patata"
    ],
    allergens: []
  },
  {
    id: 28,
    categoryId: 4,
    title: "6 Nuggets de Pollo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4CJbqstJ99mgX_McNuggets-de-pollo-9.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.5,
    ingredients: [
      "Pollo",
      "Pan de trigo"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 29,
    categoryId: 4,
    title: "9 Nuggets de Pollo",
    imageUrl: "https://mcdonalds.es/api/cms/images/aJ2af6Tt2nPbaTzV_Sharebox-10-McNuggets-10-Camembert-Bites.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 4.5,
    ingredients: [
      "Pollo",
      "Pan de trigo"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 30,
    categoryId: 4,
    title: "Aros de Cebolla",
    imageUrl: "https://mcdonalds.es/api/cms/images/aPY_DLpReVYa3edS_McNuggets-spicy-9.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.0,
    ingredients: [
      "Cebolla",
      "Pan de trigo"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 31,
    categoryId: 4,
    title: "Tiras de Pollo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4ApbqstJ99mgR_Alitas-de-pollo.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.9,
    ingredients: [
      "Pollo",
      "Pan de trigo"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 32,
    categoryId: 4,
    title: "Chicken McBites",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4BJbqstJ99mgT_Chicken-McBites-9.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.2,
    ingredients: [
      "Pollo",
      "Pan de trigo"
    ],
    allergens: ["Gluten"]
  },


  // 5 - HAPPY MEAL

  {
    id: 33,
    categoryId: 5,
    title: "Happy Meal Hamburguesa",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4md-pbqstJ99jCa_ChickenBurgerKids.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.0,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Patata"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 34,
    categoryId: 5,
    title: "Happy Meal Cheeseburger",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meBJbqstJ99jCk_HamburguesaHappyMeal.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.2,
    ingredients: [
      "Pan de trigo",
      "Carne de vacuno",
      "Queso cheddar"
    ],
    allergens: ["Gluten", "Lácteos"]
  },
  {
    id: 35,
    categoryId: 5,
    title: "Happy Meal Nuggets",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4BpbqstJ99mgV_McNuggets-de-pollo-4.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.3,
    ingredients: [
      "Pollo",
      "Pan de trigo",
      "Patata"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 36,
    categoryId: 5,
    title: "Happy Meal Veggie",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meEpbqstJ99jCy_McFish.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.4,
    ingredients: [
      "Pan de trigo",
      "Lechuga",
      "Tomate"
    ],
    allergens: ["Gluten", "Soja"]
  },
  {
    id: 37,
    categoryId: 5,
    title: "Happy Meal Ensalada",
    imageUrl: "https://mcdonalds.es/api/cms/images/aD3Oqrh8WN-LVfc3_Ensalada_de_la_huerta_Nueva-Lechuga.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.1,
    ingredients: [
      "Lechuga",
      "Tomate"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 38,
    categoryId: 5,
    title: "Happy Meal Patatas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4D5bqstJ99mgf_Patatas_pequen%CC%83as_deluxe.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.3,
    ingredients: [
      "Patata"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 39,
    categoryId: 5,
    title: "Happy Meal Sin Gluten",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4y4A5bqstJ99mgS_Cherritos.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.6,
    ingredients: [
      "Carne de vacuno",
      "Patata"
    ],
    allergens: []
  },
  {
    id: 40,
    categoryId: 5,
    title: "Happy Meal Wrap Pollo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4meFZbqstJ99jC1_McWrap-Chicken.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.4,
    ingredients: [
      "Pan de trigo",
      "Pollo",
      "Lechuga"
    ],
    allergens: ["Gluten"]
  },


  // 6 - ENSALADAS

  {
    id: 41,
    categoryId: 6,
    title: "Ensalada César con Pollo",
    imageUrl: "https://mcdonalds.es/api/cms/images/aD3Kdrh8WN-LVfZn_Ensalada_Cesar_Nueva-Lechuga.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 6.5,
    ingredients: [
      "Lechuga",
      "Pollo",
      "Queso cheddar"
    ],
    allergens: ["Gluten", "Lácteos", "Huevo", "Pescado"]
  },
  {
    id: 42,
    categoryId: 6,
    title: "Ensalada Mixta",
    imageUrl: "https://mcdonalds.es/api/cms/images/aD3Oqrh8WN-LVfc3_Ensalada_de_la_huerta_Nueva-Lechuga.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.0,
    ingredients: [
      "Lechuga",
      "Tomate",
      "Cebolla"
    ],
    allergens: []
  },
  {
    id: 43,
    categoryId: 6,
    title: "Ensalada Mediterránea",
    imageUrl: "https://mcdonalds.es/api/cms/images/aD3F5rh8WN-LVfVz_Ensalada_Honey_MustardCacahuetes_Nueva-lechuga.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 5.8,
    ingredients: [
      "Lechuga",
      "Tomate",
      "Queso cheddar"
    ],
    allergens: ["Lácteos"]
  },


  // 7 - POSTRES

  {
    id: 44,
    categoryId: 7,
    title: "Helado de Vainilla",
    imageUrl: "https://mcdonalds.es/api/cms/images/aGzvyUMqNJQqHqt6_Sundae_Chocolate_Blanco.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.5,
    ingredients: [
      "Helado de leche",
      "Sirope de caramelo"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 45,
    categoryId: 7,
    title: "Sundae Chocolate",
    imageUrl: "https://mcdonalds.es/api/cms/images/aGzvykMqNJQqHqt7_Sundae_Chocolate.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.8,
    ingredients: [
      "Helado de leche",
      "Sirope de chocolate"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 46,
    categoryId: 7,
    title: "Sundae Caramelo",
    imageUrl: "https://mcdonalds.es/api/cms/images/aGzvyEMqNJQqHqt5_Sundae_Caramelo.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.8,
    ingredients: [
      "Helado de leche",
      "Sirope de caramelo"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 47,
    categoryId: 7,
    title: "McFlurry Oreo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41EV5bqstJ99nSt_McFlurry_Cristal_oreo_chocolate.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 3.2,
    ingredients: [
      "Helado de leche",
      "Sirope de chocolate",
      "Sirope de caramelo"
    ],
    allergens: ["Lácteos", "Gluten", "Soja"]
  },
  {
    id: 48,
    categoryId: 7,
    title: "Tarta de Manzana",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M8pbqstJ99nUl_McPopChocolateBlanco.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.0,
    ingredients: [
      "Pan de trigo",
      "Sirope de caramelo"
    ],
    allergens: ["Gluten"]
  },
  {
    id: 49,
    categoryId: 7,
    title: "Brownie de Chocolate",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M75bqstJ99nUi_McDalenaChocolate.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.5,
    ingredients: [
      "Pan de trigo",
      "Helado de leche",
      "Sirope de chocolate"
    ],
    allergens: ["Gluten", "Huevo", "Lácteos"]
  },
  {
    id: 50,
    categoryId: 7,
    title: "Donut Glaseado",
    imageUrl: "https://mcdonalds.es/api/cms/images/aO32qJ5xUNkB162x_RedondoGlaseado_V2.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.7,
    ingredients: [
      "Pan de trigo",
      "Leche",
      "Sirope de caramelo"
    ],
    allergens: ["Gluten", "Huevo", "Lácteos"]
  },
  {
    id: 51,
    categoryId: 7,
    title: "Fruit Cup",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41ET5bqstJ99nSl_Manzana.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.9,
    ingredients: [
      "Leche" // si quieres más realista, puedes sustituirla por "Manzana" y meterla en el set de 15
    ],
    allergens: []
  },


  // 8 - MCCAFÉ
  {
    id: 52,
    categoryId: 8,
    title: "Café Solo",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M5pbqstJ99nUZ_Cafe%CC%81Espresso.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.3,
    ingredients: [
      "Café",
      "Agua"
    ],
    allergens: []
  },
  {
    id: 53,
    categoryId: 8,
    title: "Café con Leche",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M4pbqstJ99nUV_Cafe%CC%81ChaiLatte.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.6,
    ingredients: [
      "Café",
      "Leche"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 54,
    categoryId: 8,
    title: "Capuccino",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M3pbqstJ99nUR_Cafe%CC%81CapuccinosinCacao.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.0,
    ingredients: [
      "Café",
      "Leche"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 55,
    categoryId: 8,
    title: "Latte Vainilla",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M55bqstJ99nUa_Cafe%CC%81MochaLatte.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.4,
    ingredients: [
      "Café",
      "Leche"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 56,
    categoryId: 8,
    title: "Chocolate Caliente",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M6pbqstJ99nUd_ChocolatecalienteNesquik.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.1,
    ingredients: [
      "Leche",
      "Sirope de chocolate"
    ],
    allergens: ["Lácteos"]
  },
  {
    id: 57,
    categoryId: 8,
    title: "Té Verde",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M-5bqstJ99nUu_Teverde.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.7,
    ingredients: [
      "Agua"
    ],
    allergens: []
  },
  {
    id: 58,
    categoryId: 8,
    title: "Croissant de Mantequilla",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z41M7JbqstJ99nUf_Croissant.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 1.8,
    ingredients: [
      "Pan de trigo",
      "Mantequilla" 
    ],
    allergens: ["Gluten", "Lácteos"]
  },
  {
    id: 59,
    categoryId: 8,
    title: "Muffin de Arándanos",
    imageUrl: "https://mcdonalds.es/api/cms/images/aO32qZ5xUNkB162z_RedondoHalloween2025.png?rect=0,0,450,450&auto=compress&fm=webp",
    price: 2.2,
    ingredients: [
      "Pan de trigo",
      "Leche",
      "Sirope de caramelo"
    ],
    allergens: ["Gluten", "Huevo", "Lácteos"]
  }
];


export const categories: ICategory[] = [
  {
    id: 1,
    title: "Ofertas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmC5bqstJ99gjL_pcp_ofertas.png", 
  },
  {
    id: 2,
    title: "Novedades",
    imageUrl: "https://mcdonalds.es/api/cms/images/aMQLkmGNHVfTPFlF_Novedades_296x296_2.png",
  },
  {
    id: 3,
    title: "Hamburguesas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmCJbqstJ99gjI_pcp_hamburguesas.png",
  },
  {
    id: 4,
    title: "Complementos y másXmenos",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmBpbqstJ99gjG_pcp_complementos.png",
  },
  {
    id: 5,
    title: "Happy Meal",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gnIJbqstJ99gjr_pcp_happy_meal.png",
  },
  {
    id: 6,
    title: "Ensaladas",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmB5bqstJ99gjH_pcp_ensaladas.png",
  },
  {
    id: 7,
    title: "Postres",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmDJbqstJ99gjM_pcp_postres.png",
  },
  {
    id: 8,
    title: "McCafé",
    imageUrl: "https://mcdonalds.es/api/cms/images/Z4gmCZbqstJ99gjJ_pcp_mccafe.png",
  },
];
