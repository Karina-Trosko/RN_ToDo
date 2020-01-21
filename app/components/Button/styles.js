import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    $disButtonColor: '$buttonColor',

    button: {
        backgroundColor: '$buttonColor',
        paddingHorizontal: 15,
        paddingVertical: 10,
        margin: 10,
        borderRadius: 4,
    },
    text: {
        color: '$white',
        fontSize: 24,
        fontWeight: '600',
    },
});

export default styles;
