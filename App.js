/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
    FlatList,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';
import { ToDo } from "./ToDo";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            todos: [
                {
                    key: 'Get Milk',
                    text: 'Get Milk',
                    completed: true
                },
                {
                    key: 'Buy movie tickets',
                    text: 'Buy movie tickets',
                    completed: false
                },
                {
                    key: 'Learn React Native',
                    text: 'Learn React Native',
                    completed: false
                }
            ]
        };
    }

    addToDo = () => {
        if (this.state.text !== '') {
            let todo = {
                key: this.state.text,
                text: this.state.text,
                completed: false
            };
            this.setState({
                todos: [...this.state.todos, todo],
                text: ''
            });
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <ImageBackground style={styles.backgroundImage} source={require('./images/coffee-mac-table.jpg')}>
                    <View style={styles.todosContainer}>
                        <Text style={styles.h1}>To Do</Text>
                        <TextInput style={styles.inputText} placeholder="Get Milk"
                                   value={this.state.text}
                                   onChangeText={(text) => this.setState({ text })} />
                        <TouchableHighlight onPress={this.addToDo}
                                            style={styles.primaryButton}>
                            <Text style={styles.buttonText}>Add</Text>
                        </TouchableHighlight>

                        <View style={styles.todoList}>
                            <FlatList
                                data={this.state.todos}
                                renderItem={
                                    ({ item }) => <ToDo todo={item} />
                                } />
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    todosContainer: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.32)',
        marginTop: 40,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        padding: 10
    },
    todoList: {
        height: 440,
        backgroundColor: '#feff9c',
        marginTop: 10
    },
    todo: {
        fontSize: 20
    },
    inputText: {
        padding: 10,
        height: 40,
        backgroundColor: '#fff'
    },
    primaryButton: {
        width: '100%',
        height: 40,
        overflow: 'hidden',
        borderRadius: 5,
        backgroundColor: '#4682b4',
        marginTop: 10,
    },
    buttonText: {
        fontSize: 20,
        lineHeight: 40,
        fontWeight: '600',
        color: '#fff',
        width: '100%',
        textAlign: 'center'
    },
    h1: {
        fontSize: 50,
        textAlign: 'center',
        fontWeight: '600'
    },
    backgroundImage: {
        height: '100%',
        width: '100%',
        flex: 1
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
