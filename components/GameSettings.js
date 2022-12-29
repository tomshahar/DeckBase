import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TextInput, Switch, Pressable } from 'react-native'
import SeatSettings from './SeatSettings'

function checkNumPlayers(players, setNumPlayers, numPlayers) {
    let count = 0;
    console.log(players)
    for (let player of players) {
        if (player.active) {
            count = count + 1
        }
    }
    return count
}

export default function GameSettings(props) {
    const [lifeSetting, setLifeSetting] = useState(true);
    const toggleLife = () => setLifeSetting(previousState => !previousState);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <View>
                <View style={styles.lifeSettingContainer}>
                    <Text style={styles.lifeSettingLabel}>20</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#ff7477" }}
                        thumbColor={lifeSetting ? "#3f84e5" : "#717890"}
                        onValueChange={toggleLife}
                        value={lifeSetting}
                    />
                    <Text style={styles.lifeSettingLabel}>40</Text>
                </View>
                <View style={styles.seatContainer}>
                    <View style={styles.row}>
                        <SeatSettings
                            game={props.game}
                            id={0}
                            setGameSettings={props.setGameSettings}
                            decks={props.decks}
                            players={props.players}
                        ></SeatSettings>
                        <SeatSettings
                            game={props.game}
                            id={1}
                            setGameSettings={props.setGameSettings}
                            decks={props.decks}
                            players={props.players}
                        ></SeatSettings>
                    </View>
                    <View style={styles.row}>
                        <SeatSettings
                            game={props.game}
                            id={2}
                            setGameSettings={props.setGameSettings}
                            decks={props.decks}
                            players={props.players}
                        ></SeatSettings>
                        <SeatSettings
                            game={props.game}
                            id={3}
                            setGameSettings={props.setGameSettings}
                            decks={props.decks}
                            players={props.players}
                        ></SeatSettings>
                    </View>

                </View>
                </View>
                <View style={styles.startContainer}>
                    <Pressable
                        style={styles.startButton}
                        onPress={()=> {
                            if (lifeSetting) {
                                props.setCommander(true)
                            } else {
                                props.setCommander(false)
                            }
                            let count = checkNumPlayers(props.game.players)
                            props.setNumPlayers(props.numPlayers + count)
                            props.setInitialized(true)
                        }}
                    ><Text style={styles.startText}>Start!</Text></Pressable>
                </View>
            </View>
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    lifeSettingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    lifeSettingLabel: {
        fontSize: 28,
        height: 28,
        color: 'black',
        fontStyle: 'bold',
        fontFamily: 'Righteous',
        textAlign: 'center',
        marginBottom: 8,
        marginHorizontal: 10,
    },
    seatContainer: {
        marginTop: 30,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    startContainer: {
        flex: 1,
        marginTop: 30,
    },
    startButton: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: '#3f84e5',
        borderRadius: 4,
        
    },
    startText: {
        fontFamily: 'Righteous',
        color: 'white',
    },
})