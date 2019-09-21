import React from 'react';
import { ScrollView, Image, View, Text, Button, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MEALS } from '../data/dummy-data';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';

const ListItem = props => {
  return <View style={styles.listItem}>
    <DefaultText>{props.children}</DefaultText>
  </View>
};

const Card = props => {
  return <View style={{...styles.card, ...props.style}} >{ props.children }</View>
};

const MealDetailScreen = props => {
  const mealId = props.navigation.getParam('mealId');

  const selectedMeal = MEALS.find(meal => meal.id === mealId);

  return (
    <ScrollView >
      <Image source={ { uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={styles.details}>
            <DefaultText>{selectedMeal.duration}m</DefaultText>
            <DefaultText>{selectedMeal.complexity.toUpperCase()}</DefaultText>
            <DefaultText>{selectedMeal.affordability.toUpperCase()}</DefaultText>
          </View>
        <Text style={styles.title}>Ingredients</Text>
        {selectedMeal.ingredients.map(ingredient => (
        <ListItem key ={ingredient}>{ingredient}</ListItem>
        ) )}
        <Text style={styles.title}>Steps</Text>
        <View style={{padding: 10}}>
        <Card>
        {selectedMeal.steps.map(step => (
        <ListItem key ={step}>{step}</ListItem>
        ) )}
        </Card>
        </View>
    </ScrollView>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(meal => meal.id === mealId);
  return {
    headerTitle: selectedMeal.title,
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Favorite"
          iconName="ios-star"
          onPress={() => {
            console.log('Mark as favorite!');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around'
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 22,
    textAlign: 'center'
  },
  card: {
    backgroundColor: '#ccc',
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    elevation: 10,
    padding: 5,
    borderRadius: 10,
    overflow: 'hidden'
},
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: 'white',
    borderWidth: 1,
    padding: 10
  }
});

export default MealDetailScreen;
