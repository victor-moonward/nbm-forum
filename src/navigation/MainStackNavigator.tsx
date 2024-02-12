import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '@/screens/SplashScreen';
import { useAuth } from '@/hooks/useAuth';
import { Welcome } from '@/screens/Welcome';
import { Login } from '@/screens/Login';
import { Feed } from '@/screens/Feed';

const Stack = createStackNavigator();

export function MainStackNavigator() {
  const { isLoading, isUserSignedIn } = useAuth();

  if (isLoading) return <SplashScreen colorSchema='primary' />;

  function renderStacks() {
    if (isUserSignedIn) {
      return (
        <Stack.Group >
          <Stack.Screen name="Feed" component={Feed} />
        </Stack.Group>
      )
    }

    return (
      <Stack.Group>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
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