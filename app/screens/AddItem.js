import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Container } from '../components/Container';

class AddItem extends Component {
    handleTextChenge = (value) => {
        console.log(`Change: ${value}`);
    };

    handlePressSave = () => {
        console.log('Save');
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        return (
          <Container>

            <StatusBar translucent={false} barStyle="default" />
            <Input onChangeText={this.handleTextChenge} placeholder="Headline" />
            <Input onChangeText={this.handleTextChenge} placeholder="Subheading" />
            <Button text="Save" onPress={this.handlePressSave} />
            <Button text="Back" onPress={this.handlePressBack} />

          </Container>
        );
    }
}

AddItem.propTypes = {
    navigation: PropTypes.object,
};

export default AddItem;
