import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, Pressable, ScrollView, TextInput, Image } from 'react-native'
import {Slider} from '@miblanchard/react-native-slider'

import Svg, { Circle, Rect, Polygon, Path } from 'react-native-svg';

import { PowerPath, EuclydianNorm } from './DeckScreen'

import Icon from 'react-native-vector-icons/FontAwesome'

export default function NewDeckScreen(props) {
    const [slider0, setSlider0] = useState(0)
    const [slider1, setSlider1] = useState(0)
    const [slider2, setSlider2] = useState(0)
    const [slider3, setSlider3] = useState(0)
    const [slider4, setSlider4] = useState(0)
    const [slider5, setSlider5] = useState(0)

    const [colors, setColors] = useState([true, true, true, true, true])
    const [deckName, setDeckName] = useState('Add New Deck')
    const [nameFieldFocused, setNameFieldFocused] = useState(false)
    const [authorFieldFocused, setAuthorFieldFocused] = useState(false)
    const [deckAuthor, setDeckAuthor] = useState('Author')

    const [tagInputFocused, setTagInputFocused] = useState(false)
    const [currentTagInput, setCurrentTagInput] = useState('Add Tags')
    const [tags, setTags] = useState([ ])

    const [keyInputFocused, setKeyInputFocused] = useState(false)
    const [currentKeyInput, setCurrentKeyInput] = useState('Add Signature Cards')
    const [keyCards, setKeyCards] = useState([ ])

    const [keyCard0, setKeyCard0] = useState(null)
    const [keyCard1, setKeyCard1] = useState(null)
    const [keyCard2, setKeyCard2] = useState(null)

    useEffect(() => {
        for (let i = 0; i < keyCards.length; i++) {
            loadKeyCard(keyCards[i], i)
        }
    }, [keyCards]);

    const loadKeyCard = async (card, i) => {
        try {
            const response = await fetch(
                'https://api.scryfall.com/cards/named?fuzzy=' + card.replace(/\s/g, '+'), {method: 'GET'}
            );
            const json = await response.json()
            if (i == 0 && json) {
                setKeyCard0(json.image_uris.normal)
            } else if (i == 1) {
                setKeyCard1(json.image_uris.normal)
            } else if (i == 2) {
                setKeyCard2(json.image_uris.normal)
            }
        } catch (error) {
          console.error(error);
        }
    };



    let pathString = PowerPath([slider0, slider1, slider2, slider3, slider4, slider5])
    let powerLevel = EuclydianNorm([slider0, slider1, slider2, slider3, slider4, slider5])


    return (
        <ScrollView style={{flex: 1}}>
        <View style={styles.container}>


            <Svg viewBox="0 0 192 200" style={styles.powerVisual}>
                <Path d="M96 0V200M182.603 50L9.39746 150M182.603 150L9.39746 50" stroke="#F3F3F3"/>
                <Path d="M9.89746 50.2887L96 0.57735L182.103 50.2887V149.711L96 199.423L9.89746 149.711V50.2887Z" stroke="#F3F3F3"/>
                <Path d="M96 0.57735L182.103 50.2887V149.711L96 199.423L9.89746 149.711V50.2887L96 0.57735Z" stroke="black"/>
                <Path d="M35.8784 134.712V65.2889L96.0002 30.5776L156.122 65.2889V134.712L96.0002 169.423L35.8784 134.712Z" stroke="#DDDDDD"/>
                <Path d="M95.9999 62.0774L128.842 81.0387V118.961L95.9999 137.923L63.158 118.961V81.0387L95.9999 62.0774Z" stroke="#DDDDDD"/>
                <Path d="M96.0004 85.1777L108.837 92.589V107.412L96.0004 114.823L83.1636 107.412V92.589L96.0004 85.1777Z" fill="white" stroke="#DDDDDD"/>
                <Path d={pathString} stroke="#BB86FC" strokeWidth={2} fill="rgba(187, 134, 252, 0.3)" style={{transform: "translate(9)"}}/>
            </Svg>
            <View style={styles.sliderContainer}>
            <View style={styles.sliderGroup}>
                
                <View style={[styles.sliderWrapper, styles.sliderWrapper0]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>Commander</Text>
                        <Text style={styles.powerNumber}>{slider0}</Text>
                    </View>
                    <Slider
                        style={[styles.slider, styles.slider0]}
                        value={slider0}
                        onSlidingComplete={(value) => setSlider0(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
                <View style={[styles.sliderWrapper, styles.sliderWrapper1]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>Card Quality</Text>
                        <Text style={styles.powerNumber}>{slider1}</Text>
                    </View>

                    <Slider
                        style={[styles.slider, styles.slider1]}
                        value={slider1}
                        onSlidingComplete={(value) => setSlider1(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
                <View style={[styles.sliderWrapper, styles.sliderWrapper2]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>Consistency</Text>
                        <Text style={styles.powerNumber}>{slider2}</Text>
                    </View>
                    <Slider
                        style={[styles.slider, styles.slider2]}
                        value={slider2}
                        onSlidingComplete={(value) => setSlider2(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
            </View>


            <View style={styles.sliderGroup}>
                <View style={[styles.sliderWrapper, styles.sliderWrapper3]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>Resilience</Text>
                        <Text style={styles.powerNumber}>{slider3}</Text>
                    </View>
                    <Slider
                        style={[styles.slider, styles.slider3]}
                        value={slider3}
                        onSlidingComplete={(value) => setSlider3(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
                <View style={[styles.sliderWrapper, styles.sliderWrapper4]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>Disruption</Text>
                        <Text style={styles.powerNumber}>{slider4}</Text>
                    </View>

                    <Slider
                        style={[styles.slider, styles.slider4]}
                        value={slider4}
                        onSlidingComplete={(value) => setSlider4(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
                <View style={[styles.sliderWrapper, styles.sliderWrapper5]}>
                    <View style={styles.sliderTextWrapper}>
                        <Text style={styles.sliderText}>X-Factor</Text>
                        <Text style={styles.powerNumber}>{slider5}</Text>
                    </View>

                    <Slider
                        style={[styles.slider, styles.slider5]}
                        value={slider5}
                        onSlidingComplete={(value) => setSlider5(Math.round(value))}
                        maximumValue={3}
                        steps={3}
                        trackMarks={[0, 1, 2, 3]}
                    ></Slider>
                </View>
            </View>


            
            </View>
            <View style={styles.deckInfo}>
                <View style={styles.colorWrapper}>
                    <View>
                        <Pressable 
                            style={colors[0] ? styles.white : styles.emptyCircle}
                            onPress={() => {
                                let colorArray = [...colors]
                                colorArray[0] = !colorArray[0]
                                setColors(colorArray)
                            }}
                        ></Pressable>
                    </View>
                    <View>
                        <Pressable 
                            style={colors[1] ? styles.blue : styles.emptyCircle}
                            onPress={() => {
                                let colorArray = [...colors]
                                colorArray[1] = !colorArray[1]
                                setColors(colorArray)
                            }}
                        ></Pressable>
                    </View>
                    <View>
                        <Pressable 
                            style={colors[2] ? styles.black : styles.emptyCircle}
                            onPress={() => {
                                let colorArray = [...colors]
                                colorArray[2] = !colorArray[2]
                                setColors(colorArray)
                            }}
                        ></Pressable>
                    </View>
                    <View>
                        <Pressable 
                            style={colors[3] ? styles.red : styles.emptyCircle}
                            onPress={() => {
                                let colorArray = [...colors]
                                colorArray[3] = !colorArray[3]
                                setColors(colorArray)
                            }}
                        ></Pressable>
                    </View>
                    <View>
                        <Pressable 
                            style={colors[4] ? styles.green : styles.emptyCircle}
                            onPress={() => {
                                let colorArray = [...colors]
                                colorArray[4] = !colorArray[4]
                                setColors(colorArray)
                            }}
                        ></Pressable>
                    </View>
                </View>
                <View style={styles.deckTitleRow}>
                    <TextInput 
                        style={!nameFieldFocused ? styles.deckTitle : styles.nameFieldFocused}
                        value={deckName}
                        onChangeText={setDeckName}
                        clearTextOnFocus={true}
                        onFocus={() => {
                            setNameFieldFocused(true)
                        }}
                        onEndEditing={() => {
                            setNameFieldFocused(false)
                        }}

                    />
                    <Text style={styles.powerLevel}>{powerLevel}<Text style={{color: 'rgba(0,0,0,0.8)'}}>/10</Text></Text>
                </View>
                <TextInput 
                    style={!authorFieldFocused ? styles.deckAuthor : styles.authorFieldFocused}
                    value={deckAuthor}
                    onChangeText={setDeckAuthor}
                    clearTextOnFocus={true}
                    onFocus={() => {
                        setAuthorFieldFocused(true)
                    }}
                    onEndEditing={() => {
                        setAuthorFieldFocused(false)
                    }}

                />
                
                
            </View>
            <View style={!tagInputFocused ? styles.tagInput : styles.tagInputFocused}>
                <View style={styles.tagsWrapper}>
                    {
                        tags.map((tag)=> {
                            return (
                                <Pressable
                                    style={styles.tag}
                                    onPress={() => {
                                        let tagArray = [...tags]
                                        let i = tagArray.indexOf(tag);
                                        if (i > -1) { 
                                            tagArray.splice(i, 1);
                                        }
                                        setTags(tagArray)
                                    }}
                                >
                                    <Text style={styles.tagText}>{tag}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
                <TextInput
                    style={styles.tagInputText}
                    value={currentTagInput}
                    onChangeText={setCurrentTagInput}
                    clearTextOnFocus={true}
                    onFocus={() => {
                        setTagInputFocused(true)
                    }}
                    onEndEditing={() => {
                        setTagInputFocused(false)
                    }}
                    onSubmitEditing={() => {
                        let tagArray = [...tags]
                        tagArray.push(currentTagInput)
                        setTags(tagArray)
                        setCurrentTagInput('Add Tags')
                    }}

                />
                <Pressable 
                    style={styles.submitButton}
                    onPress={()=> {
                        let tagArray = [...tags]
                        tagArray.push(currentTagInput)
                        setTags(tagArray)
                        setCurrentTagInput('Add Tags')
                    }}
                >
                    <Icon 
                        style={{fontSize: 24}}
                        name='plus-circle'                
                        size='24' 
                        color={tagInputFocused ? '#BB86FC' : 'lightgrey'}
                    ></Icon>
                </Pressable>
            </View>
            <View style={!keyInputFocused ? styles.tagInput : styles.tagInputFocused}>
                <View style={styles.tagsWrapper}>
                    {
                        keyCards.map((tag)=> {
                            return (
                                <Pressable
                                    style={styles.tag}
                                    onPress={() => {
                                        let tagArray = [...keyCards]
                                        let i = tagArray.indexOf(tag);
                                        if (i > -1) { 
                                            tagArray.splice(i, 1);
                                        }
                                        setKeyCards(tagArray)
                                    }}
                                >
                                    <Text style={styles.tagText}>{tag}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
                <TextInput
                    style={styles.tagInputText}
                    value={currentKeyInput}
                    onChangeText={setCurrentKeyInput}
                    clearTextOnFocus={true}
                    onFocus={() => {
                        setKeyInputFocused(true)
                    }}
                    onEndEditing={() => {
                        setKeyInputFocused(false)
                    }}
                    onSubmit={() => {
                        let tagArray = [...keyCards]
                        if (keyCards.length < 3) {
                            tagArray.push(currentKeyInput)
                        }
                        setKeyCards(tagArray)
                        setCurrentKeyInput('Add Signature Cards')
                    }}

                />
                <Pressable 
                    style={styles.submitButton}
                    onPress={()=> {
                        let tagArray = [...keyCards]
                        if (keyCards.length < 3) {
                            tagArray.push(currentKeyInput)
                        }
                        setKeyCards(tagArray)
                        setCurrentKeyInput('Add Signature Cards')
                    }}
                >
                    <Icon 
                        style={{fontSize: 24}}
                        name='plus-circle'                
                        size='24' 
                        color={keyInputFocused ? '#BB86FC' : 'lightgrey'}
                    ></Icon>
                </Pressable>
            </View>
            <View style={styles.submitContainer}>
                <Pressable
                    style={styles.submitDeckButton}
                    onPress={()=> {
                        props.addDeck(deckName, deckAuthor, colors, tags, keyCards, [slider0, slider1, slider2, slider3, slider4, slider5])
                    }}
                ><Text style={styles.submitText}>Submit!</Text></Pressable>
            </View>
            <View style = {styles.keyCardsContainer}>
                    <View style={styles.keyCardWrapper}>
                        <Image
                            style={styles.keyCard}
                            source={{uri: keyCard0}}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={[styles.keyCardWrapper, styles.centerCard]}>
                        <Image
                            style={styles.keyCard}
                            source={{uri: keyCard1}}
                            resizeMode="contain"
                        />
                    </View>
                    <View style={styles.keyCardWrapper}>
                        <Image
                            style={styles.keyCard}
                            source={{uri: keyCard2}}
                            resizeMode="contain"
                        />
                    </View>

                </View>
            

            
        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        paddingTop: 75,
        alignItems: 'center',
    },
    powerVisual: {
        width: 300,
        height: 300,
    },
    powerVisualWrapper: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
    },
    sliderWrapper: {
        width: 160,
    },
    sliderContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
    },
    sliderTextWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end'
    },
    sliderText: {
        fontFamily: 'Righteous',
        fontSize: 12,
        color: 'rgba(0,0,0,0.8)'
    },
    powerNumber: {
        fontFamily: 'Righteous',
        fontSize: 16,
        color: '#BB86FC'
    },
    sliderWrapper0: {
    },
    sliderWrapper1: {
    },
    deckInfo: {
        marginHorizontal: 10,
        marginVertical: 20,
        flex: 1,
        width: '100%',
    },
    deckTitle: {
        fontSize: 24,
        fontFamily: 'Righteous',
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        flex: 1,
    },
    deckAuthor: {
        fontSize: 16,
        fontFamily: 'Righteous',
        color: 'grey',
        marginTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: 'white',
        maxWidth: 75,
    },
    emptyCircle: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: 'rgba(187, 134, 252, 0.3)',
        marginHorizontal: 2,
    },
    white: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#F7EBE8',
        marginHorizontal: 2,
    },
    blue: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#5C95FF',
        marginHorizontal: 2,

    },
    black: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#3A2E39',
        marginHorizontal: 2,

    },
    red: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#F87575',
        marginHorizontal: 2,

    },
    green: {
        width: 16,
        height: 16,
        borderRadius: 20,
        backgroundColor: '#79C99E',
        marginHorizontal: 2,

    },
    colorWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    powerLevel: {
        fontSize: 24,
        fontFamily: 'Righteous',
        color: '#BB86FC',
    },    
    deckTitleRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
        
    },
    nameFieldFocused: {
        fontSize: 24,
        fontFamily: 'Righteous',
        borderBottomWidth: 2,
        borderBottomColor: '#BB86FC',
        flex: 1,
    },
    authorFieldFocused: {
        marginTop: 5,
        fontSize: 16,
        fontFamily: 'Righteous',
        color: 'grey',
        borderBottomWidth: 2,
        borderBottomColor: '#BB86FC',
        maxWidth: 100,
    },
    tagInput: {
        borderColor: 'lightgrey',
        borderWidth: 2,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 10,
    },
    tagInputFocused: {
        borderColor: '#BB86FC',
        borderWidth: 2,
        padding: 5,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginBottom: 10,


    },
    tagInputText: {
        fontSize: 12,
        fontFamily: 'Righteous',
        paddingVertical: 3,
        borderWidth: 1,
        borderColor: 'white',
        flex: 1,
        marginVertical: 2,
        minWidth: 50,
    },
    submitButton: {
        marginTop: 1,
    },
    tag: {
        paddingVertical: 3,
        paddingHorizontal: 7,
        borderRadius: 50,
        borderColor: '#BB86FC',
        backgroundColor: 'rgba(187, 134, 252, 0.1)',
        borderWidth: 1,
        marginRight: 5, 
        marginVertical: 2,
    },
    tagText: {
        fontFamily: 'Righteous',
        fontSize: 12,
    },
    tagsWrapper: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    keyCardsContainer: {
        flexDirection: 'row',
    },
    keyCardWrapper: {
        flex: 1,
        alignItems: 'center',
    },
    centerCard: {
        marginHorizontal: 5,
    },
    keyCard: {
        width: '100%',
        height: 200,
    },
    submitContainer: {
    },
    submitDeckButton: {
        paddingVertical: 10,
        paddingHorizontal: 35,
        backgroundColor: '#3f84e5',
        borderRadius: 4,
        marginTop: 20,
    },
    submitText: {
        fontFamily: 'Righteous',
        color: 'white',
    },







})