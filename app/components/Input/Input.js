import React from 'react';
import PropTypes from 'prop-types';
import { TextInput } from 'react-native';

import styles from './styles';

const Input = ({ onChangeText, placeholder, value = '' }) => (
  <TextInput
    onChangeText={onChangeText}
    placeholder={placeholder}
    value={value}
  />
);


Input.propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default Input;
