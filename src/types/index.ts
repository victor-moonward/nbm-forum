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
  CreatePost: undefined;
  Settings: undefined;
  SinglePost: {
    id: number
  };
}

export type StackNavigation = StackNavigationProp<RootStackParamList>;

interface User {
  id: number;
  firstName: string;
  lastName: string;
  avatar: string | null;
  email: string;
  telephone: string;
}

export interface Posts {
  id: number;
  title: string;
  content: string;
  createdAt: string;
  user: User;
  likes: number;
  comments: number;
  tags: Array<{name: string}>
}

export interface Comments {
  id: number;
  createdAt: string;
  postId: number;
  text: string;
  user: User;
  userId: number;
  comments: Array<number>
}