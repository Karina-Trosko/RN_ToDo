import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';

import { Title } from '../components/Title';
import { Button } from '../components/Button';
import { Container } from '../components/Container';

class Detailes extends Component {
    handlePressDelete = () => {
        console.log('Delete');
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { headline, subheading, color } = this.props;
        return (
          <Container>
            <StatusBar translucent={false} barStyle="default" />
            <Title headline={headline} subheading={subheading} />
            <Button text="Delete" onPress={this.handlePressDelete} />
            <Button text="Back" onPress={this.handlePressBack} />
          </Container>
        );
    }
}

Detailes.propTypes = {
    headline: PropTypes.string,
    subheading: PropTypes.string,
    color: PropTypes.string,
    navigation: PropTypes.object,
};

const mapStateToProps = (state) => {
    console.log(state);
    const { headline, subheading } = state.currentItem.item;
    const { color } = state.currentItem;
    return {
        headline,
        subheading,
        color,
    };
};
export default connect(mapStateToProps)(Detailes);
