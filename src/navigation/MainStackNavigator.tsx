import { createStackNavigator } from '@react-navigation/stack';
import { SplashScreen } from '@/screens/common/SplashScreen';
import { useAuth } from '@/hooks/auth/useAuth';
import { Welcome } from '@/screens/common/Welcome';
import { Login } from '@/screens/auth/Login';
import { Feed } from '@/screens/feed/Feed';
import { CreateAccount } from '@/screens/auth/CreateAccount';
import { SinglePost } from '@/screens/post/SinglePost';
import { CreatePost } from '@/screens/post/CreatePost';
import { Settings } from '@/screens/profile/Settings';
import { PersonalInformation } from '@/screens/profile/PersonalInformation';
import { RootStackParamList } from '@/types';
import { Location } from '@/screens/profile/Location';
import { UpdatePassword } from '@/screens/profile/UpdatePassword';

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
          <Stack.Screen name="CreatePost" component={CreatePost} />
          <Stack.Screen name="Settings" component={Settings} />
          <Stack.Screen name="PersonalInformation" component={PersonalInformation} />
          <Stack.Screen name="Location" component={Location} />
          <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
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