import React, { useState } from 'react'
import { StyleSheet, View, Pressable } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function NavigationControls(props) {
  return (
    <View style={styles.container}>
        <Pressable
            onPress={() => {
                props.setScreen(0)
            }}
            style={styles.navButton}
        >
            <Icon 
                name='theater-masks'                
                size='32' 
                color='black'
            ></Icon>
        </Pressable>
        <Pressable
            onPress={() => {
                props.setScreen(1)
            }}
            style={styles.navButton}
        >
            <Icon 
                name='dice-d20' 
                size='32' 
                color='black'
            ></Icon>
        </Pressable>
        <Pressable
            onPress={() => {
                props.setScreen(2)
            }}
            style={styles.navButton}
        >
            <Icon 
                name='dragon' 
                size='32' 
                color='black'
            ></Icon>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginHorizontal: 20, 
        paddingBottom: 30,
    },
    navButton: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
    }
})