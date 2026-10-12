export type Course = 'Starter' | 'Main Course' | 'Dessert';

export interface MenuItem {
  id: string;
  dishName: string;
  description: string;
  course: Course;
  price: number;
}