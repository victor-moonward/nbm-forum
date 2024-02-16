import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '@/screens/SplashScreen';
import { useAuth } from '@/hooks/useAuth';
import { Welcome } from '@/screens/Welcome';
import { Login } from '@/screens/Login';
import { Feed } from '@/screens/Feed';
import { CreateAccount } from '@/screens/CreateAccount';
import { SinglePost } from '@/screens/SinglePost';
import { RootStackParamList } from '@/types';

const Stack = createStackNavigator<RootStackParamList>();

export function MainStackNavigator() {
  const { isLoading, isUserSignedIn } = useAuth();

  if (isLoading) return <SplashScreen colorSchema='primary' />;

  function renderStacks() {
    if (isUserSignedIn) {
      return (
        <Stack.Group >
          <Stack.Screen name="Feed" component={Feed} />
          <Stack.Screen name="SinglePost" component={SinglePost} />
        </Stack.Group>
      )
    }

    return (
      <Stack.Group>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="CreateAccount" component={CreateAccount} />
      </Stack.Group>
    )
  }

  return (
    <Stack.Navigator
      initialRouteName="Welcome"
      screenOptions={{ headerShown: false }}
    >
      {renderStacks()}
    </Stack.Navigator>
  );
}