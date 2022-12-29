import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import HomeScreen from './HomeScreen'
import AccountScreen from './AccountScreen'
import GameScreen from './GameScreen'
import DeckScreen from './DeckScreen'


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
                ></GameScreen>
            </View>
        )
    } else if (props.screen == 2) {
        return (
            <View style={styles.container}>
                <AccountScreen
                ></AccountScreen>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})