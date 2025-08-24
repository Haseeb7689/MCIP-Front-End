export type User = {
  id: string;
  name: string;
  city: string;
  contact: string;
  whatsapp: string;
  category: "regular" | "dealer" | "enduser";
  email: string;
};

export const mockUser: User = {
  id: "u1",
  name: "Haseeb",
  city: "Lahore",
  contact: "03xx-xxxxxxx",
  whatsapp: "03xx-xxxxxxx",
  category: "regular",
  email: "haseeb@example.com",
};
