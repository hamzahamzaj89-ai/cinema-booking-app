export interface Address {
  id: string;
  label: "Home" | "Office" | "Other";

  fullName: string;
  phone: string;

  country: string;
  city: string;
  area: string;
  street: string;
  apartment?: string;
  postalCode: string;

  isDefault: boolean;
}
