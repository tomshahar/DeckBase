import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Svg, { Circle, Rect, Polygon, Path } from 'react-native-svg';
import { PowerPath } from './DeckScreen'
import { useEffect } from 'react'


export default function PowerLevelIcon(props) {

    let pathString = PowerPath(props.powerArray)
    
    return (
        <View>
            <Svg viewBox="0 0 192 200" style={styles.powerVisual}>
                <Path d="M96 0V200M182.603 50L9.39746 150M182.603 150L9.39746 50" stroke="#DDDDDD" strokeWidth={3}/>
                <Path d="M9.89746 50.2887L96 0.57735L182.103 50.2887V149.711L96 199.423L9.89746 149.711V50.2887Z" stroke="#DDDDDD" strokeWidth={3}/>
                <Path d="M96 0.57735L182.103 50.2887V149.711L96 199.423L9.89746 149.711V50.2887L96 0.57735Z" stroke="rgba(0,0,0,0.5)" strokeWidth={5}/>
                <Path d="M35.8784 134.712V65.2889L96.0002 30.5776L156.122 65.2889V134.712L96.0002 169.423L35.8784 134.712Z" stroke="#DDDDDD" strokeWidth={3}/>
                <Path d="M95.9999 62.0774L128.842 81.0387V118.961L95.9999 137.923L63.158 118.961V81.0387L95.9999 62.0774Z" stroke="#DDDDDD" strokeWidth={3}/>
                <Path d="M96.0004 85.1777L108.837 92.589V107.412L96.0004 114.823L83.1636 107.412V92.589L96.0004 85.1777Z" fill="white" stroke="#DDDDDD" strokeWidth={3}/>
                <Path d={pathString} stroke="#BB86FC" fill="rgba(187, 134, 252, 0.3)" strokeWidth={10}  style={{transform: "translate(9)"}}/>
            </Svg>
        </View>
    )
}

const styles = StyleSheet.create({
    powerVisual: {
        width: 45, 
        height: 45,
    }
})