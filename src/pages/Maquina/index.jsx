import React, { useContext, useState } from 'react';
import { Button } from 'react-native';
import { DataContext } from '../../../contexts/data';
import { Container, ViewButton, Input, Label, Title } from './style'

import { useNavigation } from '@react-navigation/native';

export default function Maquina() {

  const { data, setData } = useContext(DataContext)
  const navigation = useNavigation();

  function navegaDetalhesValor() {

    Object.keys(data).forEach((item) => {
      console.log(item + ' : ' + data[item])
    })
    navigation.navigate('DetalhesValor')

  }

  function toBack() {
    setData({...data, 
      modelMachine: null,
      seriesMachine: null,
    })

    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })

    navigation.navigate('Cliente')

    
  }


  return (
    <Container>
      <Title>
        <Label>Dados da maquina:</Label>
      </Title>
      <Label> Modelos das maquinas:</Label>
      <Input
        multiline={true}
        value={data.modelMachine}
        onChangeText={e => {setData({...data, modelMachine: e})}}
        placeholder='30GXE358386S; 30XAS250386S; etc..'
      />
      <Label> Series das maquinas:</Label>
      <Input
        multiline={true}
        value={data.seriesMachine}
        onChangeText={e => {setData({...data, seriesMachine: e})}}
        placeholder='Series das maquinas'
      />

      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Proximo" onPress={navegaDetalhesValor} />
      </ViewButton >

    </Container>
  )
}
