import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, Image, View, TouchableOpacity } from "react-native";
import Avenger from '../models/Avenger';
import { Icon } from 'react-native-elements';
import { fetchData } from '../api/Api';


interface PropsItem {
    item: Avenger,
    onPress: () => void,
}

interface Props {
  character: string,
}

const Item = ({ item, onPress }: PropsItem) => (
    <View style={styles.item}>
        <Image source = {{ uri: item.image }} style={styles.imageView} />
        <Text style={[styles.title]}>{item.title}</Text>
        <View style={styles.containerButton}>
          <TouchableOpacity onPress={onPress} style={[styles.button]}>
            <Icon
              name='comment'
              type='evilicon'
              color='#517fa4'
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={onPress} style={[styles.button]}>
            <Icon
              name='comment'
              type='evilicon'
              color='#517fa4'
            />
          </TouchableOpacity>
        </View>
    </View>
);

export const Avengers = ({ character }: Props) => {
  const [selectedId, setSelectedId] = useState(null);
  const [data, setData] = useState(null);

  const getData = async () => {
    setData(await fetchData(character));
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [character]);

  const renderItem = ({ item }) => {

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item._id)}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item._id}
        extraData={selectedId}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  item: {
    backgroundColor: 'black',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    margin: 15
  },
  imageView: {
    width: '100%',
    height: 400 ,
    borderRadius : 7
  },
  containerButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button: {
    backgroundColor: 'white',
    height: 60,
    width: 130,
    justifyContent: 'center',
    borderRadius: 8,
  },
});

