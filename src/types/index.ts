export interface ISVG {
  color?: string;
  [key: string]: string | number | undefined;
}

export interface UserData {
  accessToken: string;
  user: {
    address: string;
    avatar: string;
    email: string;
    firstName: string;
    id: number;
    lastName: string;
    telephone: string;
  }
}