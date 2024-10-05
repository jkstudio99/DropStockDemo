export interface ProductDto {
  productid?: number;
  productname: string;
  unitprice: number;
  unitinstock: number;
  productpicture?: string;
  categoryid: number;
  createddate?: Date;
  modifieddate?: Date;
  categoryname?: string;
}

export interface ProductResponse {
  total: number;
  products: ProductDto[];
}
