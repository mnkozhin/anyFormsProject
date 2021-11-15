import React from 'react';
import { StyleSheet, Text, View, Button, ReactTable  } from 'react-native';
import { FriendsContext } from './FriendsContext';

class HomeScreen extends React.Component {

  
  render() {
    return (
      <View style={styles.container}>
        <Text>You have { this.context.currentFriends.length } friends.</Text>
        <View>

        {
          
          this.context.currentFriends.map((cfriend) => (
           
              <Button
              key={ cfriend.id }
              title={ `unfriend: ${ cfriend.name }` }
              onPress={() =>
                this.context.removeFriend(cfriend.id)
                
                
              }
            />
          ))
        }


        
        </View>
        <Button
          title="Add some friends"
          onPress={() =>
            this.props.navigation.navigate('Friends')
          }
        />
      </View>
    );
  }
}
HomeScreen.contextType = FriendsContext;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen;