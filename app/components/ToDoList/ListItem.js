import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View } from 'react-native';

import Color from 'color';
import styles from './styles';
import { Title } from '../Title';

const ListItem = ({
    headline, subheading, onPress, backgroundColor,
}) => {
    const itemStyle = [styles.listItem];
    if (backgroundColor) {
        itemStyle.push({
            backgroundColor: Color(backgroundColor).lighten(0.1),
            borderColor: backgroundColor,
        });
    }
    return (
      <View style={itemStyle}>
        <TouchableHighlight onPress={onPress}>
          <Title
            headlineStyle={styles.headlineStyle}
            subheadingStyle={styles.subheadingStyle}
            headline={headline}
            subheading={subheading}
          />
        </TouchableHighlight>
      </View>
    );
};

ListItem.propTypes = {
    headline: PropTypes.string,
    subheading: PropTypes.string,
    onPress: PropTypes.func,
    backgroundColor: PropTypes.string,
};

export default ListItem;
