import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ListItem, Separator } from '../components/ToDoList';
import { Button } from '../components/Button';
import { Container } from '../components/Container';
import { setupCurrentItem } from '../actions/currentItem';

import data from '../data/data';

const colors = ['#00FFFF',
    '#40E0D0',
    '#B0E0E6',
    '#00BFFF',
    '#1E90FF',
    '#00CED1',
    '#7FFFD4',
    '#66CDAA',
    '#00FF7F',
    '#00FA9A'];


class Home extends Component {
    colorCounter=0;

    getColor() {
        if (this.colorCounter > 9) {
            this.colorCounter = 0;
        }
        // eslint-disable-next-line no-plusplus
        return colors[this.colorCounter++];
    }

    handlePressItem = (item) => {
        const { navigation, setupItem } = this.props;
        setupItem(item);

        navigation.navigate('Detailes');
    };

    handlePressAdd = () => {
        const { navigation } = this.props;
        navigation.navigate('AddItem');
    };


    render() {
        return (
          <Container>
            <StatusBar barStyle="default" translucent={false} />
            <Button text="Add" onPress={this.handlePressAdd} />
            <FlatList
              data={data}
              renderItem={({ item }) => (
                <ListItem
                  headline={item.headline}
                  subheading={item.subheading}
                  backgroundColor={this.getColor()}
                  onPress={() => this.handlePressItem(item)}
                />
                    )}
              keyExtractor={(item) => item.id}
              ItemSeparatorComponent={Separator}
            />
          </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setupItem: (item, color) => {
        dispatch(setupCurrentItem(item, color));
    },
});
Home.propTypes = {
    navigation: PropTypes.object,
    setupItem: PropTypes.func,
};

export default connect(null, mapDispatchToProps)(Home);
