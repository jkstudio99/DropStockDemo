export interface CreateUpdateProductDto {
  productname: string;
  unitprice: number;
  unitinstock: number;
  categoryid: number;
  productpicture?: File;
}
