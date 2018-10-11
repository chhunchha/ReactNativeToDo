import React from 'react';
import { Image, StyleSheet, Text, TouchableHighlight, View } from "react-native";

export class ToDo extends React.Component {
    render() {
        return (
            <View style={styles.todoItem}>
                <TouchableHighlight onPress={() => this.props.toggleCompleted(this.props.todo)}>
                    <Image
                        source={this.props.todo.completed ? require('./images/checked-checkbox.png') : require('./images/unchecked-checkbox.png')}
                        style={styles.checkbox} />
                </TouchableHighlight>
                <Text style={[styles.todoText, this.props.todo.completed ? styles.completed : '']}>
                    {this.props.todo.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todoItem: {
        height: 40,
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        width: '100%',
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row'
    },
    todo: {
        lineHeight: 40,
        paddingLeft: 5
    },
    todoText: {
        fontSize: 20,
        color: '#000',
        lineHeight: 40,
        paddingLeft: 5
    },
    completed: {
        textDecorationLine: 'line-through',
        textDecorationStyle: 'solid'
    },
    checkbox: {
        marginTop: 5
    }
});