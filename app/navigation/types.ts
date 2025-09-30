export type RootStackParamList = {
  Drawer: undefined;
  MealOverview: { categoryId: string };
  MealDetail: { mealId: string };
};

export type DrawerStackParamList = {
  Categories: undefined;
  Favourites: undefined;
};
