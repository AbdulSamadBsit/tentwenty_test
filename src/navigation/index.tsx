import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Notification from '../screen/notification';
import useNavigation from './useNavigation';
import AuthNavigation from './authStack';
import {SCREENS} from '../constants';
import {SafeAreaView} from 'react-native';
import ProfileNavigation from './profile';
import WatchScreen from '../screen/movie/movies';
import CategoriesScreen from '../screen/movie/category';
import SearchResultsScreen from '../screen/movie/search';
import MovieDetailsScreen from '../screen/movie/movie_detail';

const MainNavigation = () => {
  const {currentTheme} = useNavigation();

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREENS.AUTH_STACK}>
        <Stack.Screen name={SCREENS.AUTH_STACK} component={WatchScreen} />
        <Stack.Screen
          name={SCREENS.PROFILE_STACK}
          component={CategoriesScreen}
        />
        <Stack.Screen
          name={'SearchResultsScreen'}
          component={SearchResultsScreen}
        />
        <Stack.Screen
          name={'MovieDetailsScreen'}
          component={MovieDetailsScreen}
        />
        <Stack.Screen name={SCREENS.Notification} component={Notification} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
