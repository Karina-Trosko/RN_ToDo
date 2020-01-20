import React from 'react';
import PropTypes from 'prop-types';
import {
    TouchableHighlight,
    Text,
} from 'react-native';
import Color from 'color';
import styles from './styles';


const underlayColor = Color('#FFA07A');

const Button = ({ text, onPress, disabled = false }) => (
  <TouchableHighlight
    style={styles.button}
    onPress={onPress}
    disabled={disabled}
    underlayColor={underlayColor}
      // eslint-disable-next-line indent
  >
    <Text style={styles.text}>{text}</Text>
  </TouchableHighlight>
);

Button.propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
};

export default Button;
