import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';

import styles from './styles';

const Title = ({
    headline, subheading, headlineStyle, subheadingStyle,
}) => (
  <View>
    <Text style={headlineStyle || styles.headline}>{headline}</Text>
    <Text style={subheadingStyle || styles.subheading}>{subheading}</Text>
  </View>
);

Title.propTypes = {
    headline: PropTypes.string,
    subheading: PropTypes.string,
    headlineStyle: PropTypes.object,
    subheadingStyle: PropTypes.object,
};

export default Title;
