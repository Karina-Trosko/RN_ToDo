import EStyleSheet from 'react-native-extended-stylesheet';
import { StyleSheet } from 'react-native';

const styles = EStyleSheet.create({
    separator: {
        height: StyleSheet.hairlineWidth,
    },
    listItem: {
        flex: 1,
        borderRadius: 4,
        padding: 4,
        margin: 10,
        borderWidth: 2,
        justifyContent: 'flex-start',
    },
    headlineStyle: {
        fontSize: 24,
        fontWeight: '600',
    },
    subheadingStyle: {
        fontSize: 18,
        fontWeight: '300',
    },
});

export default styles;
