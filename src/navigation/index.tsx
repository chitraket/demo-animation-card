import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../utils';
import HomeStack from './homeStack';

const RootNavigation = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <HomeStack/>
    </NavigationContainer>
  );
};

export default RootNavigation;
