import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const Title = ({ headline, subheading }) => (
  <View>
    <Text>{headline}</Text>
    <Text>{subheading}</Text>
  </View>
);

Title.propTypes = {
    headline: PropTypes.string,
    subheading: PropTypes.string,
};

export default Title;
