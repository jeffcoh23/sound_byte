import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Dimensions from 'Dimensions';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { MKTextField, MKColor, MKButton } from 'react-native-material-kit';


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      addFriendClicked: false,
      addSongClicked: false,
    }
  }

  handlePlaceholder = () => {
    if (this.state.addFriendClicked){
      return 'Search People...'
    }
    else if ( this.state.addSongClicked){
      return "Search Song..."
    }
    else{
      return null
    }
  }

  handlePersonAddPress = () => {
    this.setState({ addFriendClicked: !this.state.addFriendClicked, addSongClicked: false})
  }

  handlePlaylistAddPress = () => {
    this.setState({ addSongClicked: !this.state.addSongClicked, addFriendClicked: false})
  }


  render = () => {
    return (
      <View style={styles.header}>
        <TouchableOpacity onPress={this.handlePlaylistAddPress}>
          <Icon style={[styles.addSong, this.state.addSongClicked ? {color: 'white'} : null]} name={'playlist-add'} size={50}/>
        </TouchableOpacity>
        <MKTextField
            //text={this.state.email}
            //onTextChange={email => this.setState({ email })}
            textInputStyle={styles.search}
            placeholder={this.handlePlaceholder()}
            tintColor={MKColor.Teal}
          />
          <TouchableOpacity onPress={this.handlePersonAddPress}>
            <Icon style={[styles.addFriend, this.state.addFriendClicked ? {color: 'white'} : null]} name={'person-add'} size={45}/>
          </TouchableOpacity>
      </View>
    );
  };
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "rgba(247,111,10,1)",
    flexDirection: 'row',
    width: DEVICE_WIDTH,
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 75,
    borderRadius: 15
  },
  addSong: {
    justifyContent: 'flex-start',
    marginVertical: 20,
    paddingLeft: 20
  },
  search: {
    height: 40,
    color: MKColor.White,
    backgroundColor: MKColor.White,
    width: 200,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  addFriend: {
    justifyContent: 'flex-end',
    marginVertical: 20,
    paddingRight: 20
  }

});

const DEVICE_WIDTH = Dimensions.get('window').width;

export default Header;
