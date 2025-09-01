import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MovieDetailsScreen from '../screen/movie/movie_detail';
import SearchResultsScreen from '../screen/movie/search';
import CategoriesScreen from '../screen/movie/category';
import WatchScreen from '../screen/movie/movies';
import {SCREENS} from '../constants';

const MainNavigation = () => {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName={SCREENS.WATCH}>
        <Stack.Screen name={SCREENS.WATCH} component={WatchScreen} />
        <Stack.Screen name={SCREENS.CATEGORY} component={CategoriesScreen} />
        <Stack.Screen name={SCREENS.SEARCH} component={SearchResultsScreen} />
        <Stack.Screen name={SCREENS.DETAILS} component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigation;
