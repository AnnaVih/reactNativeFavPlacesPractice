import React, { Component } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
    }
    
    placeNameChangedHandler = val => {
        this.setState({
            placeName: val
        });
    }

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === ""){
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
    }

    render(){
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    placeholder="An awesome places"
                    value={this.state.placeName}
                    style={styles.placeInput}
                    onChangeText={this.placeNameChangedHandler}
                />
                <Button 
                    title="Add"
                    style={styles.placeButton}
                    onPress={this.placeSubmitHandler}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    placeInput: {
        width: "70%"
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;



