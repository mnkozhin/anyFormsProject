import 'react-native-gesture-handler';
import React from 'react';
import uuid from 'react-native-uuid';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { FriendsContext } from './src/FriendsContext';
import HomeScreen from './src/HomeScreen';
import FriendsScreen from './src/FriendsScreen';

const Stack = createStackNavigator();

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      possibleFriends: [
        {id: uuid.v4(), name: 'Alice'},
        {id: uuid.v4(), name: 'Bob'},
        {id: uuid.v4(), name: 'Sammy'}
      ],
      currentFriends: [],
    }
  }

  addFriend = (id) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state
    console.log(id) 
    // Pull friend out of possibleFriends
    var index = possibleFriends.map(x => {
      return x.id;
    }).indexOf(id);
    
  
     


    const addedFriend =    possibleFriends.splice(index, 1);
    //possibleFriends.splice(id, id)
    
    // And put friend in currentFriends
    currentFriends.push(addedFriend[0])
    
    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
  
  }

  removeFriend = (id) => {
    const {
      currentFriends,
      possibleFriends,
    } = this.state
   
    // Pull friend out of possibleFriends
    var index = currentFriends.map(x => {
      return x.id;
    }).indexOf(id);
    
  
     


    const removedFriend =    currentFriends.splice(index, 1);
    //possibleFriends.splice(id, id)
    console.log("removedFriend ", removedFriend)
    // And put friend in currentFriends
    possibleFriends.push(removedFriend[0])
    console.log("possibleFriends ",possibleFriends) 
    console.log("currentFriends ",currentFriends) 
    // Finally, update the app state
    this.setState({
      currentFriends,
      possibleFriends,
    })
    console.log(possibleFriends) 
    console.log(currentFriends) 
  }

  render() {
    return (
      <FriendsContext.Provider
        value={
          {
            currentFriends: this.state.currentFriends,
            possibleFriends: this.state.possibleFriends,
            addFriend: this.addFriend,
            removeFriend: this.removeFriend
          }
        }
      >
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Home"
              component={HomeScreen}
            />
            <Stack.Screen
              name="Friends"
              component={FriendsScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </FriendsContext.Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;