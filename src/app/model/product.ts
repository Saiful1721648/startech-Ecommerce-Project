export class Product {
  prodId: number = 0;
  productTitle: string = '';
  amt: number = 0;
  details: string = '';
  img: string = '';
  qnt:number =0 ;
  Brand:string ='';
  details1: string = '';
  details2: string = '';
  details3: string = '';
  category!:Category['title'];
  subCategory1!: SubCategory1['title'];

}
export class Category {
  id: number = 0;
  title: string = '';
}
export class SubCategory1 {
  id: number = 0;
  title: string = '';
  categoryId: number = 0;
}
export class SubCategory2 {
  id: number = 0;
  title: string = '';
  subCategory1Id: number = 0;
  categoryId: number = 0;
}
