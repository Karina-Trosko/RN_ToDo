import React from 'react';
import PropTypes from 'prop-types';
import { TextInput, View, Text } from 'react-native';

import styles from './styles';

const Input = ({ onChangeText, placeholder, value }) => (
  <View style={styles.container}>
    <Text style={styles.lable}>{`${placeholder}:`}</Text>
    <TextInput
      onChangeText={onChangeText}
      value={value}
      style={styles.input}
    />
  </View>
);


Input.propTypes = {
    onChangeText: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
};

export default Input;
