import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'



export default function DeckScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.deckListContainer}>
            {
            props.decks.map((deck) => {
                return (
                  <Pressable 
                    style = {styles.deckWrapper}
                    onPress={() => 
                      {props.setDeckPageOpen(true); props.setDeckContent(deck)}
                    }
                  >
                    <View style={styles.colorWrapper}>
                        <View>
                            {deck.colors[0] ? <View style={styles.white}></View> : null}
                        </View>
                        <View>
                            {deck.colors[1] ? <View style={styles.blue}></View> : null}
                        </View>
                        <View>
                            {deck.colors[2] ? <View style={styles.black}></View> : null}
                        </View>
                        <View>
                            {deck.colors[3] ? <View style={styles.red}></View> : null}
                        </View>
                        <View>
                            {deck.colors[4] ? <View style={styles.green}></View> : null}
                        </View>
                    </View>
                    <View style={styles.deckTitleWrapper}>
                      <Text style={styles.deckTitle}>{deck.name}</Text>
                      <Text style={styles.deckAuthor}>{deck.player}</Text>
                    </View>
                  </Pressable>
                )
              })
            }  
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    deckListContainer: {
        marginHorizontal: 10,
      },
      playerName: {
        fontSize: 24,
        fontFamily: 'Righteous',
      },
      playerDecks: {
        paddingBottom: 20,
        paddingtop: 10,
      },
      deckTitle: {
        fontSize: 16,
        fontFamily: 'Righteous',
        color: 'black',
      },
      deckTitleWrapper: {
      },
      deckAuthor: {
        fontFamily: 'Righteous',
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)'
      },
      deckWrapper: {
        paddingVertical: 10,
        flexDirection: 'column',
      },
      white: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: '#F7EBE8',
        marginHorizontal: 2,
    },
    blue: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: '#5C95FF',
        marginHorizontal: 2,

    },
    black: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: '#3A2E39',
        marginHorizontal: 2,

    },
    red: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: '#F87575',
        marginHorizontal: 2,

    },
    green: {
        width: 12,
        height: 12,
        borderRadius: 20,
        backgroundColor: '#79C99E',
        marginHorizontal: 2,

    },
    colorWrapper: {
        flexDirection: 'row',
        marginBottom: 5,
    },
})