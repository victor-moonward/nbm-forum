import { NavigationContainer } from '@react-navigation/native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

interface IAppProviders {
  children: React.ReactNode;
}

const queryClient = new QueryClient();

export function AppProviders({ children }: IAppProviders) {
  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <NavigationContainer>
          {children}
        </NavigationContainer>
      </GestureHandlerRootView>
    </QueryClientProvider>
  )
}