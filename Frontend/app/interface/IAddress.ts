export interface IAddress {
    _id: string;

    user: string;

    fullName: string;

    phone: string;

    city: string;

    area: string;

    address: string;

    label: "Home" | "Work" | "Other";

    isDefault: boolean;

    isActive: boolean;

    createdAt: string;

    updatedAt: string;

    __v: number;
}



export interface IAddressFormData {
  fullName: string;
  phone: string;
  city: string;
  area: string;
  address: string;
  isDefault: boolean;
  label: string;
}
