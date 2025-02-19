import { Address } from "@/interfaces/address";

export interface User {
  address: Address;
  id: number;
  email: string;
  username: string;
  password: string;
  name: { firstName: string; lastName: string };
  phone: string;
}
