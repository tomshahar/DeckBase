import React, { useState } from 'react'
import { SafeAreaView, StyleSheet, View, Text, TextInput, Switch, Pressable, FlatList, ScrollView } from 'react-native'

function chooseBackgroundColor(id) {
    let styleObj;
    if (id == 0) {
        styleObj = {
            backgroundColor: '#ff7477',
        }
    } else if (id==1) {
        styleObj = {
            backgroundColor: '#3f84e5',
        }
    } else if (id==2) {
        styleObj = {
            backgroundColor: '#717890',
        }
    } else if (id==3) {
        styleObj = {
            backgroundColor: '#03b5aa',
        }
    }
    return styleObj
}
export default function SeatSettings(props) {
    const [active, setActive] = useState(false)
    const [player, setPlayer] = useState('Player')
    const [playerChosen, setPlayerChosen] = useState(false)
    const [playerPickerOpen, setPlayerPickerOpen] = useState(false)
    const [deck, setDeck] = useState('Deck')
    const [deckChosen, setDeckChosen] = useState(false)
    const [deckPickerOpen, setDeckPickerOpen] = useState(false)

    let playerList = []
    for (let i = 0; i < props.players.length; i++) {
        playerList.push({
            name: props.players[i],
            id: i
        })
    }
    playerList.push({name: 'GUEST', id: props.players.length})

    let deckList = []
    for (let i = 0; i < props.decks.length; i++) {
        if (props.decks[i].player == player || player == 'Player' || player == 'GUEST')
        deckList.push({
            name: props.decks[i].name,
            id: i
        })
    }
    
    return (
        <SafeAreaView>
            {!active ? <Pressable 
                style={[styles.container, styles.inactive]}
                onPress={() => {
                    setActive(true);
                    let playersArray = [...props.game.players]
                    let playerObject = {...props.game.players[props.id]}
                    playerObject.active = true
                    playersArray[props.id] = playerObject
                    props.setGameSettings({...props.game, players: playersArray})
                }}
            ></Pressable> 
            : <View style={[styles.container, styles.active, chooseBackgroundColor(props.id)]}>
                <Pressable
                    style={styles.openPlayerPicker}
                    onPress={() => {
                        setPlayerChosen(false)
                        setPlayerPickerOpen(true)
                    }}
                >
                    <Text style={[playerChosen ? styles.playerLabel : styles.playerLabelLight]}>{player}</Text>
                </Pressable>
                {playerPickerOpen ? <ScrollView 
                    contentContainerStyle={styles.playerPicker}
                    style={styles.playerPickerBackground}
                >
                    {playerList.map((player) => (
                        <Pressable
                            style={styles.playerPickerOption}
                            onPress={() => {
                                setPlayer(player.name)
                                setPlayerChosen(true)
                                setPlayerPickerOpen(false)
                                let playersArray = [...props.game.players]
                                let playerObject = {...props.game.players[props.id]}
                                playerObject.player = player.name
                                playersArray[props.id] = playerObject
                                props.setGameSettings({...props.game, players: playersArray})
                            }}
                        ><Text style={styles.playerPickerOptionText}>{player.name}</Text></Pressable>
                    ))}
                </ScrollView>
                : <View style={styles.deckPicker}>
                    {!deckPickerOpen ?
                    <Pressable
                        style={styles.openDeckPicker}
                        onPress={() => {
                            setDeckPickerOpen(true)
                            setDeckChosen(false)
                        }}
                    >  
                        {!deckChosen ? <View style={styles.deckPickerIcon}></View>
                        : <Text style={styles.deckPickerText}>{deck}</Text>}
                    </Pressable> :
                    <ScrollView style={styles.playerPickerBackground}>
                    {deckList.map((deck) => (
                        <Pressable
                            style={styles.playerPickerOption}
                            onPress={() => {
                                setDeck(deck.name)
                                setDeckChosen(true)
                                setDeckPickerOpen(false)
                                let playersArray = [...props.game.players]
                                let playerObject = {...props.game.players[props.id]}
                                playerObject.deck = deck.name
                                playersArray[props.id] = playerObject
                                props.setGameSettings({...props.game, players: playersArray})
                            }}
                        ><Text style={styles.playerPickerOptionText}>{deck.name}</Text></Pressable>
                    ))}
                    </ScrollView>
                    }

                </View>}
            </View>}

            
        </SafeAreaView>    
    )
}

const styles = StyleSheet.create({
    container: {
        width: 170,
        height: 250,
        borderRadius: 8,
        borderWidth: 3,
        margin: 5,
    },
    inactive: {
        borderStyle: 'dotted',
        borderRadius: 8,
        borderWidth: 3,
        borderColor: 'grey',
        backgroundColor: '#f5f5f5'
    },
    active: {
        borderStyle: 'solid',
        borderColor: 'black',
    },
    openPlayerPicker: {
        height: '20%',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    playerPickerBackground: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        flex: 1,
    },
    playerPicker: {
        paddingHorizontal: 5,
        alignItems: 'center',
    },
    playerLabelLight: {
        color: 'rgba(255,255,255,0.5)',
        fontFamily: 'Righteous',
        fontSize: 24,
    },
    playerLabel: {
        color: 'white',
        fontFamily: 'Righteous',
        fontSize: 24,
    },
    playerPickerOption: {
        paddingVertical: 5,
    },
    playerPickerOptionText: {
        color: 'rgba(255,255,255,0.55)',
        fontFamily: 'Righteous',
        fontSize: 16,
        width: 125,
        marginHorizontal: 10,
    },
    deckPicker: {
        flex: 1,
    },
    deckPickerIcon: {
        width: 100,
        height: 150,
        borderWidth: 3,
        borderStyle: 'dotted',
        borderColor: 'rgba(255,255,255,0.3)',
        backgroundColor: 'rgba(255,255,255,0.1)',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    deckPickerText: {
        color: 'white',
        fontFamily: 'Righteous',
        fontSize: 16,
        textAlign: 'center',
        width: 120,
        marginBottom: 20,
    },
    openDeckPicker: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    
})