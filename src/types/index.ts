import { StackNavigationProp } from "@react-navigation/stack";

export interface ISVG {
  color?: string;
  [key: string]: string | number | undefined;
}

export interface UserData {
  accessToken: string;
  user: {
    address: null;
    avatar: null;
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

export interface Posts {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    avatar: string | null;
    email: string;
    telephone: string;
  },
  likes: number,
  comments: number,
  tags: Array<{
    name: string
  }>
}