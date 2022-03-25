import React from "react";
import { Text } from "react-native";

class MarvelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  render() {
    return <Text>List</Text>;
  }
}

export default MarvelList;
