import { Injectable } from '@angular/core';
import {Category, Product, SubCategory1, SubCategory2 } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }
  productArray: Product[] =[

   {
      prodId:1,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Intel Pentium G6400 10th Gen Special PC",
      amt : 35000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "AMD Ryzen 5 5600G Processor with Radeon Graphics",
      details2 : "Gigabyte B550M S2H AM4 AMD Micro ATX Motherboard",
      details3 : "8GB 3200MHz RAM + 256GB SSD + 1TB HDD",
      category: 'Component',
      subCategory1: 'ram'



    },
    {
      prodId:2,
      img:"../../../assets/i3-12100f.jpg",
      productTitle : "AMD Athlon 3000G Special PC",
      amt : 40000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "ASRock B560 Pro4 10th & 11th Gen ATX Motherboard",
      details2 : "Intel 11th Gen Core i5-11400 Rocket Lake Processor ",
      details3 : "8GB 3200MHz RAM + 1TB HDD",
      category :"Desktop",
      subCategory1:'amd'

    },
    {
      prodId:3,
      img:"../../../assets/intel-11th-gen-core-i5.jpg",
      productTitle : "Intel 10th Gen Core i3-10100 Special PC",
      amt : 800000 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "Intel 10th Gen Core i3 10100F Processor",
      details2 : "Gigabyte H510M H Intel 11th Gen Motherboard",
      details3 : "eam 8GB DDR4 3200MHz RAM + 128GB M.2 PCIe SSD",
      category :"Desktop",
      subCategory1:'intel'

    },
    {
      prodId:4,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Intel 10th Gen Core i5-10400 Special PC",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard ",
      qnt : 1,
      Brand:"RAZER",
      details1 : "AMD Ryzen 7 5700G Processor with Radeon Graphics",
      details2 : "Gigabyte B550M S2H AM4 AMD Micro ATX Motherboard",
      details3 : "8GB 3200MHz RAM + 256GB SSD + 1TB HDD",
      category :"Desktop",
      subCategory1:'intel'

    },{
      prodId:5,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "AMD Ryzen 5 5600G Special PC",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "AMD Ryzen 5 5600G Processor with Radeon Graphics",
      details2 : "Gigabyte B550M S2H AM4 AMD Micro ATX Motherboard",
      details3 : "8GB 3200MHz RAM + 256GB SSD + 1TB HDD",
      category :"Desktop",
      subCategory1:'amd'

    }
    ,{
      prodId:6,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Intel Computer",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "ASRock B560M Steel Legend 10th and 11th Gen Micro ATX Motherboard",
      details2 : "Intel 10th Gen Core i7-10700 Processor",
      details3 : "8GB 3200MHz RAM + 256GB SSD + 1TB HDD",
      category :"Component",
      subCategory1:'RAM(Desktop)'

    },
    {
      prodId:7,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "amd Computer",
      amt : 400 ,
      details : "MSI H510M-A PRO Intel 10th Gen and 11th Gen Mirco-ATX Motherboard",
      qnt : 1,
      Brand:"RAZER",
      details1 : "",
      details2 : "",
      details3 : "",
      category :"Component",
      subCategory1:'RAM(Laptop)'

    },
    {
      prodId:8,
      img:"../../../assets/g6400-10th-gen-pc-500x500.jpg",
      productTitle : "Intel Core i3-2120 2nd Gen Processor (Tray)",
      amt : 3000 ,
      details : "Clock Speed: 3.30 GHz",
      qnt : 1,
      Brand:"intel",
      details1 : "Cache: 3 MB Intel Smart Cache",
      details2 : "Cores: 2, Threads: 4",
      details3 : "Socket: FCLGA1155",
      category :"Component",
      subCategory1:"CPU Cooler"

    }
  ];

  //cat
  category: Category[] = [
    {
      id: 1,
      title: 'Desktop',
    },
    {
      id: 2,
      title: 'Laptop',
    },
    {
      id: 3,
      title: 'Monitor',
    },
    {
      id: 4,
      title: 'Component',
    },

    {
      id: 5,
      title: 'TV',
    },
    {
      id: 6,
      title: 'Router',
    },
    {
      id: 7,
      title: 'Accessories',
    },
    {
      id: 8,
      title: 'Networking',
    },
    {
      id: 9,
      title: 'Security',
    },
    {
      id: 10,
      title: 'Others',
    },
  ];

  subCategories1: SubCategory1[] = [
    {
      id: 1,
      title: 'processor',
      categoryId: 4,
    },
    {
      id: 2,
      title: 'CPU Cooler',
      categoryId: 4,
    },
    {
      id: 3,
      title: 'Motherboard',
      categoryId: 4,
    },
    {
      id: 4,
      title: 'Graphics Card',
      categoryId: 4,
    },
    {
      id: 5,
      title: 'RAM(Desktop)',
      categoryId: 4,
    },
    {
      id: 6,
      title: 'RAM(Laptop)',
      categoryId: 4,
    },
    {
      id: 7,
      title: 'Power Supply',
      categoryId: 4,
    },
    {
      id: 8,
      title: 'SSD',
      categoryId: 4,
    },

    {
      id: 9,
      title: 'led',
      categoryId: 3,
    }
  ];
  subCategories2: SubCategory2[] = [
    {
      id: 1,
      title: 'intel',
      subCategory1Id: 3,
      categoryId: 4,
    },
    {
      id: 2,
      title: 'corsair',
      subCategory1Id: 1,
      categoryId: 4,
    },
    {
      id: 3,
      title: 'gskill',
      subCategory1Id: 1,
      categoryId: 4,
    },
    {
      id: 4,
      title: 'samsung',
      subCategory1Id: 2,
      categoryId: 4,
    },
    {
      id: 5,
      title: 'dell',
      subCategory1Id: 4,
      categoryId: 3,
    }
  ];

  getProducts(): Product[] {
    return this.productArray;
  }
  getCategories(): Category[] {
    return this.category;
  }
  getSubCategory1(): SubCategory1[] {
    return this.subCategories1;
  }
  getSubCategory2(): SubCategory2[] {
    return this.subCategories2;
  }



}
