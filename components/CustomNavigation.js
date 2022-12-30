import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import AccountScreen from './AccountScreen'
import GameScreen from './GameScreen'
import NewDeckScreen from './NewDeckScreen'


export default function CustomNavigation(props) {
    if (props.screen == 0) {
        return (
            <View style={styles.container}>
                <HomeScreen
                    decks={props.decks}
                ></HomeScreen>
            </View>
        )
    } else if (props.screen == 1) {
        return (
            <View style={styles.container}>
                <GameScreen
                    decks={props.decks}
                    players={props.players}
                ></GameScreen>
            </View>
        )
    } else if (props.screen == 2) {
        return (
            <View style={styles.container}>
                <NewDeckScreen
                    addDeck={props.addDeck}
                ></NewDeckScreen>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})