import { StackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import Home from '../screens/Home';
import AddItem from '../screens/AddItem';
import Detailes from '../screens/Detailes';

const PLATFORM = Platform.OS === 'ios' ? 'IOS' : 'Android';

const HomeStack = StackNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            headerTitle: `Application is running on ${PLATFORM}`,
        },
    },
    AddItem: {
        screen: AddItem,
    },
    Detailes: {

        screen: Detailes,
    },

});

export default HomeStack;
