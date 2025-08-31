import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar, View} from 'react-native';

// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import MainNavigation from './src/navigation';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StatusBar backgroundColor="transparent" barStyle="default" />
          <MainNavigation />
        </PersistGate>
      </Provider>
    </View>
  );
};

export default React.memo(App);
