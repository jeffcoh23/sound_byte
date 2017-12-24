import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Header from './Header';
import FriendList from './FriendList'
import MyStory from './MyStory'


//TODO add MobX store to decide whether to show the Home/FriendList,
// the SearchSongView, the PersonAddView, etc.
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <MyStory/>
        <FriendList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 4,
    borderWidth: 0.5,
  }
});

export default App;
