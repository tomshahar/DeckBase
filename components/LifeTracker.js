import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';


function Player(props) {

    let containerStyle;
    let rotationValue;
    let backgroundColor;
    let lifeUpModifier
    let lifeDownModifier

    //modify styles based on screen position
    if (props.player.id == 0 || props.player.id == 2) {
        containerStyle = {
            flexDirection: 'row-reverse'
        }
        rotationValue = {
            transform: [{ rotate: "90deg" }]
        }
        lifeUpModifier = {
            top: 0,
        }
        lifeDownModifier = {
            bottom: 0,
        }

        if (props.player.id == 0) {
            backgroundColor = {
                backgroundColor: '#ff7477'
            }
        } else if (props.player.id == 2) {
            backgroundColor = {
                backgroundColor: '#717890'
            }
        } 
    } else if (props.player.id == 1 || props.player.id == 3) {
        containerStyle = {
            flexDirection: 'row',
        }
        rotationValue = {
            transform: [{ rotate: "270deg" }]
        }
        lifeUpModifier = {
            bottom: 0,
        }
        lifeDownModifier = {
            top: 0,
        }
        if (props.player.id == 1) {
            backgroundColor = {
                backgroundColor: '#3f84e5'
            }
        } else if (props.player.id == 3) {
            backgroundColor = {
                backgroundColor: '#03b5aa'
            }
        } 

    }


    //modify styles for 2 and 3 player games
    let playerCountModifier

    if (props.numPlayers == 3) {
        playerCountModifier = {
            height: '55%',
        }
        if (props.player.id == 2) {
            playerCountModifier = {
                width: '100%',
                height: '45%',
            }
            rotationValue = {
                transform: [{rotate: "0deg"}]
            }
            lifeUpModifier = {
                width: '50%',
                height: '100%',
                right: 0,
            }
            lifeDownModifier = {
                width: '50%',
                height: '100%',
                left: 0,
            }    
        } else if (props.player.id == 3) {
            containerStyle = {
                display: 'none',
            }
        }
    } else if (props.numPlayers == 2) {
        playerCountModifier = {
            width: '100%',
        }
        lifeUpModifier = {
            width: '50%',
            height: '100%',
            left: 0,
        }
        lifeDownModifier = {
            width: '50%',
            height: '100%',
            right: 0,
        }
        if (props.player.id == 0) {
            rotationValue = {
                transform: [{ rotate: "180deg" }]
            } 
        } else if (props.player.id == 1) {
            rotationValue = {
                transform: [{rotate: "0deg"}]
            }
        } else if (props.player.id == 2 || props.player.id == 3) {
            containerStyle = {
                display: 'none',
            }
        }
    }

    return (
        <View style = {[styles.player, containerStyle, backgroundColor, playerCountModifier]}>
            <View style={[rotationValue, styles.lifeTotalContainer]}>
                <Text style={styles.totalText}>{props.player.lifeTotal}</Text>
                <Text style={styles.deckNameText}>{props.player.deck}</Text>
             </View>
            <Pressable
                style={[styles.lifeUpButton, lifeUpModifier]}
                onPress={() => {
                    let playersArray = [...props.game.players]
                    playersArray[props.player.id] = {...props.game.players[props.player.id], lifeTotal: props.player.lifeTotal - 1}
                    props.setGameSettings({...props.game, players:  playersArray})
            }}>
                <Icon 
                    style={{fontSize: 30}}
                    name='minus-circle'                
                    size='24' 
                    color='rgba(255,255,255,0.5)'
                ></Icon>
            </Pressable>
            <Pressable
                style={[styles.lifeDownButton, lifeDownModifier]}
                onPress={() => {
                    let playersArray = [...props.game.players]
                    playersArray[props.player.id] = {...props.game.players[props.player.id], lifeTotal: props.player.lifeTotal + 1}
                    props.setGameSettings({...props.game, players:  playersArray})

            }}>
                <Icon 
                    style={{fontSize: 30}}
                    name='plus-circle'                
                    size='24' 
                    color='rgba(255,255,255,0.5)'
                ></Icon>
            </Pressable>
        </View>
    )
}

export default function LifeTracker(props) {
    console.log(props.game)

    return (
        <View style={styles.container}>
            <View style = {styles.playerContainer}>
                {props.game.players.map((player) => (
                    <Player
                        game={props.game}
                        player={player}
                        setGameSettings={props.setGameSettings}
                        numPlayers={props.numPlayers}
                    ></Player>
                ))}
            </View>
        </View>    
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    playerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        flex: 1,
    },
    player: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lifeUpButton: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lifeDownButton: {
        width: '100%',
        height: '50%',
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',
    },
    lifeTotalContainer: {
        flexDirection: 'column',
    },
    totalText: {
        fontSize: 68,
        color: 'white',
        fontStyle: 'bold',
        fontFamily: 'Righteous',
        textAlign: 'center',
    },
    deckNameText: {
        fontSize: 16,
        color: 'rgba(255,255,255,0.6)',
        fontFamily: 'Righteous',
        textAlign: 'center',
    },
})
