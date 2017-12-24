import React from 'react';
import { FlatList, Text } from 'react-native'
import FriendItem from './FriendItem'

const data = [
  {
    name: 'Jeff Cohen',
    playlistLength: '90 seconds',
  },
  {
    name: 'Peter Cohen',
    playlistLength: '60 seconds'
  }

]

class FriendList extends React.Component {
  render = () => {
    return (
      <FlatList
        data={data}
        renderItem={ ({item}) =>
          <FriendItem key={item.id} users={item}/>
        }
      />
    )
  }
}

export default FriendList;


// renderItem={({ item }) =>
//   <FriendItem
//     name={item.name}
//   />
// }
