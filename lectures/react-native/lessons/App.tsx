import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome, faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {Provider} from 'react-redux';

import HomePage from './src/pages/HomePage';
import Calendar from './src/pages/Calendar';
import {store} from './src/redux/store';

const Tab = createBottomTabNavigator();

function App(): React.JSX.Element {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions={{
            tabBarActiveTintColor: '#0057b8',
            headerShown: false,
            tabBarStyle: {
              backgroundColor: '#ffd600',
            },
          }}>
          <Tab.Screen
            name="Home"
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({color}) => (
                <FontAwesomeIcon icon={faHome} color={color} />
              ),
            }}
            component={HomePage}
          />
          <Tab.Screen
            name="Calendar"
            options={{
              tabBarLabel: 'Calendar',
              tabBarIcon: ({color}) => (
                <FontAwesomeIcon icon={faCalendarDays} color={color} />
              ),
            }}
            component={Calendar}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
