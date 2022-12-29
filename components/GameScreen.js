import React, { useState } from 'react'
import { StyleSheet, View, Text, Pressable } from 'react-native'
import LifeTracker from './LifeTracker'
import GameSettings from './GameSettings'

export default function GameScreen(props) {
  const [initialized, setInitialized] = useState(false)
  const [numPlayers, setNumPlayers] = useState(0)
  const [commander, setCommander] = useState(true)


  const [game, setGameSettings] = useState({
    players: [
      {
        id: 0,
        active: false,
        lifeTotal: 40,
        commanderDamage: 0,
        infect: 0,
        playerName: '',
        deck: '',
      },
      {
        id: 1,
        active: false,
        lifeTotal: 40,
        commanderDamage: 0,
        infect: 0,
        playerName: '',
        deck: '',
      },
      {
        id: 2,
        active: false,
        lifeTotal: 40,
        commanderDamage: 0,
        infect: 0,
        playerName: '',
        deck: '',
      },
      {
        id: 3,
        active: false,
        lifeTotal: 40,
        commanderDamage: 0,
        infect: 0,
        playerName: '',
        deck: '',
      }
    ]
  });
  return (
    <View style={styles.container}>
      {initialized 
        ? <LifeTracker
          numPlayers={numPlayers}
          commander={commander}
          game={game}
          setGameSettings={setGameSettings}
          initialized={initialized}
        ></LifeTracker> 
        : <GameSettings
          setNumPlayers={setNumPlayers}
          setInitialized={setInitialized}
          setCommander={setCommander}
          game={game}
          setGameSettings={setGameSettings}
          numPlayers={numPlayers}
        ></GameSettings>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})