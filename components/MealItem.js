import React from 'react';
import {
    View,
    Text,
    Platform,
    StyleSheet,
    TouchableOpacity,
    TouchableNativeFeedback,
    ImageBackground     
} from 'react-native';

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21 ) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style ={{padding: 10}}>
        <View style ={styles.mealItem}>
        <TouchableCmp onPress={props.onSelectMeal}>
        <View>
            <View style ={{...styles.mealHeader,...styles.mealRow}}>
                <ImageBackground source={{uri: props.image}} style={styles.bgImage} >
                <View style= {styles.titleContainer}>
                <Text numberOfLines={1} style={styles.title}>{props.title}</Text>
                </View>
                </ImageBackground>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableCmp>
        </View>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden',
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '85%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between', // row justify horizontally
        alignItems: 'center',
        height: '15%'
    },
    titleContainer: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingVertical: 5,
        paddingHorizontal: 12,
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    }

});

export default MealItem;