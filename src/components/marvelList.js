import React from "react";
import { View, Text, FlatList, Image, ScrollView } from "react-native";
import styles from "./marvelList.styles";

const ID_AUTHOR = 10;

class MarvelList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      listFiltered: [],
    };
  }

  componentDidMount() {
    fetch(
      `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${ID_AUTHOR}`
    )
      .then((response) => response.json())
      .then((responseJson) => this.setState({ list: responseJson }));
  }

  getComicsFiltered() {
    const { textForSearch } = this.props;
    fetch(
      `https://bp-marvel-api.herokuapp.com/marvel-characters?idAuthor=${ID_AUTHOR}&title=${textForSearch}`
    )
      .then((response) => response.json())
      .then((responseJson) => this.setState({ listFiltered: responseJson }));
  }

  getData() {
    const { textForSearch } = this.props;
    const { list, listFiltered } = this.state;

    if (!textForSearch.length) {
      return list;
    }

    this.getComicsFiltered();
    return listFiltered;
  }

  renderItem({ item }) {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.actionsContainer}>
          <Text style={styles.title}>{item.title}</Text>
        </View>
      </View>
    );
  }

  render() {
    return (
      <ScrollView>
        <FlatList
          data={this.getData()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: "space-between" }}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
          renderItem={this.renderItem}
        />
      </ScrollView>
    );
  }
}

export default MarvelList;
