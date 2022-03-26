export interface CarListType {
  carClassId: number;
  carClassName: string;
  image: string;
  drivingDistance: number;
  year: number;
  price: string;
  discountPercent: number;
  regionGroups: string[];
  carTypeTags: string[];
  carModels: string;
}

export interface CarDiscriptionType {
  carClassId: number;
  carClassName: string;
  carImage: string;
  maker: string;
  carModel: string;
  capacity: number;
  fuel: string;
  gearbox: string;
  additionalOption: string[];
  safetyOption: string[];
}
