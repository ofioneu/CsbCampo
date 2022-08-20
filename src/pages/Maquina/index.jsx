import React, {useContext} from 'react';
import { View, Text, StyleSheet, Button, SafeAreaView, TextInput } from 'react-native';
import { DataContext } from '../../../contexts/data';
import {Container, ViewButton, Input, Label, Title} from './style'

import { useNavigation } from '@react-navigation/native';

export default function Maquina() {

  const {data} = useContext(DataContext)
  const navigation = useNavigation();

  function navegaDetalhesValor() {
    navigation.navigate('DetalhesValor')
  }

  return (
    <Container>
        <Title>
          <Label>Dados da maquina:</Label>
        </Title>
        <Label> Modelos das maquinas:</Label>
        <Input
          placeholder='30GXE358386S; 30XAS250386S; etc..'
        />
        <Label> Series das maquinas:</Label>
        <Input
          placeholder='Series das maquinas'
        />

      <ViewButton>
        <Button title="Proximo" onPress={navegaDetalhesValor} />
      </ViewButton >

    </Container>
  )
}
