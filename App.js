import 'react-native-url-polyfill/auto'
import { useState, useEffect } from 'react'
import { supabase } from './lib/supabase'
import Auth from './components/Auth'
import { StyleSheet, View, Text } from 'react-native'
import { Session } from '@supabase/supabase-js'
import 'react-native-gesture-handler';
import CustomNavigation from './components/CustomNavigation'
import NavigationControls from './components/NavigationControls'
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';


//Create navigation screen
function ParentNavigator(props) {
  const [screen, setScreen] = useState(0)
  return (
    <View style={styles.appContainer}>
      <CustomNavigation
        screen={screen}
        setScreen={setScreen}
        decks={props.decks}
        players={props.players} 
        addDeck={props.addDeck}    
      ></CustomNavigation>
      <NavigationControls
        screen={screen}
        setScreen={setScreen} 
        getDecks={props.getDecks}
      ></NavigationControls>
    </View>
  );
}

//Handle Authentication
export default function App() {
  const [session, setSession] = useState(null)
  const [fontsLoaded] = useFonts({
    'Righteous': require('./assets/Fonts/Righteous/Righteous-Regular.ttf'),
  });
  const [decks, setDecks] = useState([])
  const [players, setPlayers] = useState([])


  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  let sub;
  const listenToChanges = async () => {
    sub = supabase.channel('*').on('postgres_changes', {event: '*', schema: '*', }, (payload) => {
      console.log('Recieved a change!: ', payload);
    }).subscribe();
    getDecks();
    getPlayers();

  }
  useEffect(() => {
    listenToChanges();
    return () => sub?.unsubscribe();
  }, []);

  const getDecks = async ( ) => {
    const {data, error} = await supabase 
      .from('Decks')
      .select('*');
    setDecks(data);
    console.log(decks)
  }
  const getPlayers = async ( ) => {
    const {data, error} = await supabase
      .from('Decks')
      .select('player')
    let playerList = [];
    for (let i=0; i < data.length; i++) {
        let repeat = false;
        for (let j = 0; j < data.length; j++) {
           if (data[i].player == playerList[j]) {
              repeat = true
           }
        }
        if (!repeat) {
          playerList.push(data[i].player)
        }
    }
    setPlayers(playerList)
  }

  const addDeck = async (deck, author, colorArray, tagArray, keyCardArray, powerArray) => {
    const {data, error} = await supabase 
        .from('Decks')
        .insert(
            { name: deck, player: author, colors: colorArray, tags: tagArray, signature_cards: keyCardArray, power_array: powerArray},
        ).select()
    console.log(data, error);
}


  if (!fontsLoaded) return <AppLoading/>;

  //
  return (
    <View style={styles.container}>
      {session && session.user? <ParentNavigator
        decks={decks}
        players={players}
        addDeck={addDeck}
        getDecks={getDecks}
      ></ParentNavigator> : <Auth />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  appContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  headerSpacer: {
    height: 70,
    backgroundColor: 'blue',
    width: '100%',
  }
})