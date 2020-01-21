import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';

import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

import styles from './styles';

class Detailes extends Component {
    handlePressDelete = () => {
        console.log('Delete');
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { headline, subheading } = this.props;
        return (
          <Container>
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
    navigation: PropTypes.object,
};

const mapStateToProps = (state) => {
    const { headline, subheading } = state.currentItem.item;
    return {
        headline,
        subheading,
    };
};
export default connect(mapStateToProps)(Detailes);
