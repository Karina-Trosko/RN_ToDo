import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    Text,
} from 'react-native';
import Color from 'color';
import styles from './styles';


const underlayColor = Color('#FFA07A');


const Button = ({ text, onPress, disabled = false }) => {
    const disabledButtonColor = Color(styles.$disButtonColor).lighten(0.5);

    const buttonStyle = [styles.button];
    if (disabled) {
        buttonStyle.push({ backgroundColor: disabledButtonColor });
    }
    return (
      <TouchableHighlight
        style={buttonStyle}
        onPress={onPress}
        disabled={disabled}
        underlayColor={underlayColor}
          // eslint-disable-next-line indent
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableHighlight>
    );
};

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
