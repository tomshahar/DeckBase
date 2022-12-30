import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import PowerLevelIcon from './PowerLevelIcon'



export default function DeckScreen(props) {
    return (
        <View style={styles.container}>
					  {
							props.deckFilter ? <View style={styles.tagContainer}>
								<Pressable
							    style={styles.tag}
									onPress={() => props.setDeckFilter(null)}
							  >
									<Text style={styles.tagText}>{props.deckFilter}</Text>
								</Pressable>
							</View> : null
						}
            <View style={styles.deckListContainer}>
            {
            props.decks
							.filter((deck) => props.deckFilter ? deck.tags.includes(props.deckFilter) : true)
							.map((deck) => {
                return (
                  <Pressable 
                    style = {styles.deckWrapper}
                    onPress={() => {
                      props.setScreen(props.screens.Deck);
											props.setDeckContent(deck)
										}}
                  >
                    <View style={styles.deckTitleWrapper}>
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
                      <Text style={styles.deckTitle}>{deck.name}</Text>
                      <Text style={styles.deckAuthor}>{deck.player}</Text>
                    </View>
                    <PowerLevelIcon
                        powerArray={deck.power_array}
                    ></PowerLevelIcon>
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
        paddingBottom: 100,
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
        maxWidth: 300,
      },
      deckAuthor: {
        fontFamily: 'Righteous',
        fontSize: 12,
        color: 'rgba(0,0,0,0.5)'
      },
      deckWrapper: {
        paddingVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
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
	  tagContainer: {
				flexDirection: 'row',
				marginHorizontal: 10,
		},
    tag: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        borderRadius: 50,
        borderColor: '#BB86FC',
        backgroundColor: 'rgba(187, 134, 252, 0.1)',
        borderWidth: 1,
        marginRight: 5 
    },
    tagText: {
        fontFamily: 'Righteous',
        fontSize: 12,
    },
})
