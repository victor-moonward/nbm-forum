import { StackNavigationProp } from "@react-navigation/stack";

export interface SVGProps {
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

export type RootStackParamList = {
  Feed: undefined;
  Welcome: undefined;
  Login: undefined;
  CreateAccount: undefined;
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;