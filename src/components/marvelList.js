import React from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
  editItem = (item) => {
    console.log("editar", item);
  };

  removeItemFromList(itemId) {
    const { list } = this.state;
    const newList = [...list];

    const removeIndex = newList.findIndex((item) => item._id === itemId);
    newList.splice(removeIndex, 1);
    return newList;
  }

  deleteItem(itemId) {
    fetch(
      ` https://bp-marvel-api.herokuapp.com/marvel-characters/${itemId}?idAuthor=${ID_AUTHOR}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => response.json())
      .then((responseJson) => {
        console.log("responseJson", responseJson);
        const newList = this.removeItemFromList(itemId);
        this.setState({ list: newList });
      })
      .catch((error) => {
        console.log(
          `Error al momento de eliminar el id: ${itemId}, error: ${error.message}`
        );
      });
  }

  renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.actionsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <View>
            <TouchableOpacity onPress={this.editItem.bind(this, item)}>
              <Text style={{ color: "#fff" }}>Editar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.deleteItem.bind(this, item._id)}>
              <Text style={{ color: "#fff" }}>Eliminar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  };

  render() {
    return (
      <ScrollView>
        <FlatList
          testID="marvel-list"
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
