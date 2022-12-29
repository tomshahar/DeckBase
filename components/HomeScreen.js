import React, { useState } from 'react'
import { StyleSheet, View, Text, SectionList, ScrollView, Pressable } from 'react-native'
import { useFonts } from 'expo-font';
import DeckScreen from './DeckScreen'
import DatabaseScreen from './DatabaseScreen'



export default function HomeScreen(props) {
  const [fontsLoaded] = useFonts({
    'Righteous': require('../assets/Fonts/Righteous/Righteous-Regular.ttf'),
  });

	const Screens = {
		Database: 0,
		Deck: 1,
	}
  
  const [screen, setScreen] = useState(Screens.Database)
  const [deckContent, setDeckContent] = useState({})
  // const [deckFilter, setDeckFilter] = useState(() => {true})

  let deckLists = [
    {
      name: 'Dylan',
      data: [
        {
          name: 'Kenrith, the Returned King',
          player: 'Dylan',
          powerArray: [2, 2, 0, 3, 2, 3],
          colors: [true, true, true, true, true],
          tags: ['Landfall', 'Magecraft', 'Copies']

        },
        {
          name: 'Samut, Voice of Dissent', 
          powerArray: [1, 2, 3, 3, 1, 0],
          player: 'Dylan',
        },
        {
          name: 'The First Sliver', 
          player: 'Dylan',
          powerArray: [1, 2, 3, 3, 1, 0],
        }
      ]
    },
    {
      name: 'Tom',
      data: [
        {
          name: 'Esika, God of the Tree',
          player: 'Tom',
          powerArray: [1, 2, 3, 3, 1, 0],

        },
        {
          name: 'Kynaios and Tiro of Meletis', 
          player: 'Tom',
          powerArray: [1, 2, 3, 3, 1, 0],

        },
        {
          name: 'Omnath, Locus of Creation', 
          player: 'Tom',
          powerArray: [1, 2, 3, 3, 1, 0],
        }
      ]
    },
  ]

	const activeScreen = function() {
		console.log("screen:", screen);
		switch(screen) {
			case Screens.Database:
				return <DatabaseScreen
						deckLists={deckLists}
						decks={props.decks}
						setDeckContent={setDeckContent}
						setScreen={setScreen}
						screens={Screens}
					></DatabaseScreen>
			case Screens.Deck:
				return <DeckScreen
						deckContent={deckContent}
						// setDeckFilter={setDeckFilter}
						setScreen={setScreen}
						screens={Screens}
					></DeckScreen>
			// case Screens.Tag:
			// 	return tagScreen;
		}

	}

  // 
  return (
    <ScrollView style={styles.container}>
      { activeScreen() }
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 75,
    
  },
  
})
