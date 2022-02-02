import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackScreen } from './src/navigation/Root/RootStackNavigation';
import { store } from './src/Redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootStackScreen />
      </NavigationContainer>
    </Provider>
  );
}
