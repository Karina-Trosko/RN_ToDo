import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View, Alert } from 'react-native';
import { connect } from 'react-redux';
import Color from 'color';
import { setupCurrentData } from '../actions/data';

import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

import styles from './styles';

class Detailes extends Component {
deleteItem=(id) => {
    const { navigation, data, setupData } = this.props;
    // console.log(id);
    // console.log(index);
    // data.splice(index, 1);
    // console.log(data);
    setupData(data.filter((item) => item.id !== id));
    navigation.goBack();
};

    handlePressDelete = () => {
        console.log('Delete');
        const { id, navigation } = this.props;
        Alert.alert('Delete', 'Are you sure you want to delet this?', [
            {
                text: 'Cancel',
                style: 'cancel',
                onPress: () => navigation.goBack(),
            },
            { text: 'OK', onPress: () => this.deleteItem(id) },
        ]);
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { headline, subheading, color } = this.props;

        return (
          <Container backgroundColor={Color(color).lighten(0.1)}>
            <StatusBar translucent={false} barStyle="default" />
            <Title headline={headline} subheading={subheading} />
            <View style={styles.containerForButtons}>
              <Button text="Delete" onPress={this.handlePressDelete} />
              <Button text="Back" onPress={this.handlePressBack} />
            </View>
          </Container>
        );
    }
}

Detailes.propTypes = {
    headline: PropTypes.string,
    subheading: PropTypes.string,
    id: PropTypes.string,
    navigation: PropTypes.object,
    setupData: PropTypes.func,
    data: PropTypes.array,
    color: PropTypes.string,
};
const mapDispatchToProps = (dispatch) => ({
    setupData: (data) => {
        dispatch(setupCurrentData(data));
    },
});

const mapStateToProps = (state) => {
    const { headline, subheading, id } = state.currentItem.item;
    const { color } = state.currentItem;
    const { data } = state.data;
    return {
        headline,
        subheading,
        id,
        data,
        color,
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(Detailes);
