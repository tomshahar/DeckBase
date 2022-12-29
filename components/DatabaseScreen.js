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
                    <View style={styles.deckTitleWrapper}>
                      <Text style={styles.deckTitle}>{deck.name}</Text>
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
        color: 'rgba(140,140,140,1)',
      },
      deckTitleWrapper: {
      },
      deckWrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
      }})