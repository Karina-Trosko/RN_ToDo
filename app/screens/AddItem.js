import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Container } from '../components/Container';

import styles from './styles';

class AddItem extends Component {
state={
    headline: '',
    subheading: '',
};

    handleTextChengeHeadline = (value) => {
        this.setState({ headline: value });
        console.log(this.state.headline);
    };

    handleTextChengeSubheading = (value) => {
        this.setState({ subheading: value });
    };

    handlePressSave = () => {
        console.log('Save');
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        console.log(`state ${this.state.headline} and ${this.state.subheading}`);
        return (
          <Container>

            <StatusBar translucent={false} barStyle="default" />
            <Input onChangeText={this.handleTextChengeHeadline} placeholder="Headline" />
            <Input onChangeText={this.handleTextChengeSubheading} placeholder="Subheading" />
            <View style={styles.containerForButtons}>
              <Button text="Save" onPress={this.handlePressSave} disabled={!(this.state.headline && this.state.subheading)} />
              <Button text="Back" onPress={this.handlePressBack} />
            </View>

          </Container>
        );
    }
}

AddItem.propTypes = {
    navigation: PropTypes.object,
};

export default AddItem;
