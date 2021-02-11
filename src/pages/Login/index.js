import React from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informe o usuário e a senha encaminhados pela escola</Text>

      <View style={styles.user}>
        <TextInput style={styles.userText} placeholder={'Usuário'}></TextInput>
      </View>

      <View style={styles.password}>
        <TextInput style={styles.passwordText} placeholder={'Senha'}></TextInput>
      </View>

      <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
    </View>
)}

export default Home;