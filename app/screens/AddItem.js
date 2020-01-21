import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StatusBar, View } from 'react-native';
import { connect } from 'react-redux';
import { Button } from '../components/Button';
import { Input } from '../components/Input';
import { Container } from '../components/Container';
import { setupCurrentData } from '../actions/data';

import styles from './styles';


class AddItem extends Component {
    state = {
        headline: '',
        subheading: '',
    };

    handleTextChengeHeadline = (value) => {
        this.setState({ headline: value });
    };

    handleTextChengeSubheading = (value) => {
        this.setState({ subheading: value });
    };

    handlePressSave = () => {
        const { navigation, data, setupData } = this.props;
        const { headline, subheading } = this.state;
        const id = String(Number(data[data.length - 1].id) + 1);
        data.push({
            id,
            headline,
            subheading,
        });
        setupData(data);

        navigation.goBack();
    };

    handlePressBack = () => {
        const { navigation } = this.props;
        navigation.goBack();
    };

    render() {
        const { headline, subheading } = this.state;
        console.log(`state ${headline} and ${subheading}`);
        return (
          <Container>

            <StatusBar translucent={false} barStyle="default" />
            <Input onChangeText={this.handleTextChengeHeadline} placeholder="Headline" />
            <Input onChangeText={this.handleTextChengeSubheading} placeholder="Subheading" />
            <View style={styles.containerForButtons}>
              <Button text="Save" onPress={this.handlePressSave} disabled={!(headline && subheading)} />
              <Button text="Back" onPress={this.handlePressBack} />
            </View>

          </Container>
        );
    }
}

const mapDispatchToProps = (dispatch) => ({
    setupData: (data) => {
        dispatch(setupCurrentData(data));
    },
});

const mapStateToProps = (state) => {
    const { data } = state.data;
    return {
        data,
    };
};

AddItem.propTypes = {
    navigation: PropTypes.object,
    setupData: PropTypes.func,
    data: PropTypes.array,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddItem);
