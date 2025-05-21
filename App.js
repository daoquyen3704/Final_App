import { NavigationContainer } from '@react-navigation/native';
import RootNavigator from './src/Navigation/RootNavigation';
import { SafeAreaView } from 'react-native';
import { AuthProvider } from './AuthContext';


const App = () => {

  return (
    <AuthProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <NavigationContainer>
          <RootNavigator />
        </NavigationContainer>
      </SafeAreaView>
    </AuthProvider>
  );
}

export default App;