import React from 'react';
import { View, Text, Platform, StyleSheet, TouchableOpacity, TouchableNativeFeedback } from 'react-native';

const MealItem = props => {
    let TouchableCmp = TouchableOpacity;

    if(Platform.OS === 'android' && Platform.Version >=21 ) {
        TouchableCmp = TouchableNativeFeedback;
    }
    return (
        <View style ={styles.mealItem}>
        <TouchableCmp onPress={props.onSelectMeal}>
        <View>
            <View style ={{...styles.mealHeader,...styles.mealRow}}>
                <Text>{props.title}</Text>
            </View>
            <View style={{...styles.mealRow, ...styles.mealDetail}}>
                <Text>{props.duration}m</Text>
                <Text>{props.complexity.toUpperCase()}</Text>
                <Text>{props.affordability.toUpperCase()}</Text>
            </View>
        </View>
        </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row'
    },
    mealHeader: {
        height: '90%',
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between' // row justify horizontally
    }

});

export default MealItem;