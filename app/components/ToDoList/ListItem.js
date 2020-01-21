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
    const headlineStyle = [styles.headlineStyle];
    const subheadingStyle = [styles.subheadingStyle];
    const underlayColor = Color(backgroundColor).darken(0.8);
    if (backgroundColor) {
        itemStyle.push({
            backgroundColor: Color(backgroundColor).lighten(0.1),
            borderColor: backgroundColor,
        });
        headlineStyle.push({
            color: Color(backgroundColor).darken(0.5),
        });
        subheadingStyle.push({
            color: Color(backgroundColor).darken(0.5),
        });
    }

    return (
      <View style={itemStyle}>
        <TouchableHighlight onPress={onPress} underlayColor={underlayColor}>
          <Title
            headlineStyle={headlineStyle}
            subheadingStyle={subheadingStyle}
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
