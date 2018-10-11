import React from 'react';
import { StyleSheet, Text, View } from "react-native";

export class ToDo extends React.Component {
    render() {
        return (
            <View style={styles.todo}>
                <Text style={[styles.todoText, this.props.todo.completed ? styles.completed : '']}>
                    {this.props.todo.text}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    todo: {
        height: 40,
        borderBottomColor: '#ccc',
        borderStyle: 'solid',
        width: '100%',
        borderBottomWidth: 1
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
    }
});