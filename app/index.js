import React from 'react';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';
import store from './config/store';

import Navigator from './config/routes';

EStyleSheet.build({

    $color1: '#00FFFF',
    $color2: '#40E0D0',
    $color3: '#B0E0E6',
    $color4: '#00BFFF',
    $color5: '#1E90FF',
    $color6: '#7B68EE',
    $color7: '#0000FF',
    $color8: '#008B8B',
    $color9: '#4B0082',
    $color10: '#00008B',

    $buttonColor: '#DC143C',
    $white: '#ffffff',

});

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
