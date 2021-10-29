import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppItem from './AppItem';

export default function AppList() {
    const [items, setItems] = useState([
        {id: 1, quantidade: 5, descricao: "arroz" }, 
        {id: 2, quantidade: 1, descricao: "feijão" }, 
        {id: 3, quantidade: 6, descricao: "pão" }, 
        {id: 4, quantidade: 2, descricao: "massa" },
        {id: 4, quantidade: 2, descricao: "massa" },
        {id: 4, quantidade: 2, descricao: "massa" },
        {id: 4, quantidade: 2, descricao: "massa" },
        {id: 4, quantidade: 2, descricao: "massa" },
    ]);

    const renderItem = ({ item }) => (
        <AppItem key={item.id} id={item.id} item={item.quantidade + '  de ' + item.descricao} />
    );

    return (
      <View style={styles.container}>
        <StatusBar style="light" />
        <ScrollView 
            style={styles.scrollContainer}
            contentContainerStyle={styles.itemsContainer}
        >
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </ScrollView>
      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#D93600',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
      marginBottom: 20
    },
    scrollContainer: {
      flex: 1,
      width: '90%'
    },
    itemsContainer: {
      flex: 1,
      marginTop: 10,
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
  });