import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';

const FriendItem = props => {
  return (
    <View style={styles.container}>
      <View style={styles.friendBox}>
        <Text style={styles.name}>{props.users.name}</Text>
        <Text style={styles.length}> Length: {props.users.playlistLength}</Text>
        <View style={styles.goToPlaylist}>
          <Icon name={'arrow-forward'} size={25}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: 2,
    borderColor: 'lightgrey',
    paddingTop: 7,
    height: 50,
  },
  friendBox: {
    justifyContent: 'center',
    paddingLeft: 15
  },
  name: {
    width: DEVICE_WIDTH - 10,
    fontSize: 20
  },
  length: {
    color: 'lightgrey',
    fontSize: 12
  },
  goToPlaylist: {
    flex: 1,
    paddingRight: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },
})


const DEVICE_WIDTH = Dimensions.get('window').width;

export default FriendItem
