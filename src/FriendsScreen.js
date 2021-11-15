import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { FriendsContext } from './FriendsContext';

class FriendsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Add friends here!</Text>

        {
          this.context.possibleFriends.map((friend) => (
            
            <Button
              key={ friend.id }
              title={ `Add ${ friend.name }` }
              onPress={() =>
                this.context.addFriend(friend.id)
                
                
              }
            />
          ))
        }

        <Button
          title="Back to home"
          onPress={() =>
            this.props.navigation.navigate('Home')
          }
        />
      </View>
    );
  }
}
FriendsScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default FriendsScreen;