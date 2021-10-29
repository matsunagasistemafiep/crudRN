import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function AppForm() {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Definir um novo item de compra</Text>

        <View style={styles.inputContainer}>

          <TextInput 
            style={styles.input}
            placeholder="O que está faltando em casa?"
          />

          <TextInput 
            style={styles.input}
            placeholder="Qual a quantidade?"
          />

          <TouchableOpacity
            style={styles.button}
          >
            <Text style={styles.buttonText}>Adicionar à lista</Text>
          </TouchableOpacity>

        </View>



      </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#6495ED',
      alignItems: 'center',
    },
    title: {
      color: '#fff',
      fontSize: 20,
      fontWeight: 'bold',
      marginTop: 50,
    },
    inputContainer: {
      flex: 1,
      marginTop: 30,
      width: '90%',
      padding: 20,
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
      alignItems: 'stretch',
      backgroundColor: '#fff'
    },
    input: {
      marginTop: 10,
      height: 60,
      backgroundColor: '#fff',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'stretch'
    },
    button: {
      marginTop: 10,
      height: 60,
      backgroundColor: 'blue',
      borderRadius: 10,
      paddingHorizontal: 24,
      fontSize: 16,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 20,
      shadowOpacity: 20,
      shadowColor: '#ccc',
    },
    buttonText: {
      color: '#fff',
      fontWeight: 'bold',
    }
  });