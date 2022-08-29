import React, { useContext, useState } from 'react';
import { Button } from 'react-native';
import { DataContext } from '../../../contexts/data';
import { Container, ViewButton, Input, Label, Title } from './style'

import { useNavigation } from '@react-navigation/native';

export default function Maquina() {

  const { data, setData } = useContext(DataContext)
  const [modelMachine, setModelMachine] = useState('')
  const [seriesMachine, setSeriesMachine] = useState('')
  const navigation = useNavigation();

  function navegaDetalhesValor() {

    setData({...data,
      modelMachine: modelMachine,
      seriesMachine: seriesMachine,
    })

    Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
    navigation.navigate('DetalhesValor')

  }

  function toBack() {
    navigation.navigate('Cliente')
  }


  return (
    <Container>
      <Title>
        <Label>Dados da maquina:</Label>
      </Title>
      <Label> Modelos das maquinas:</Label>
      <Input
        onChangeText={textModelMachine => setModelMachine(textModelMachine)}
        placeholder='30GXE358386S; 30XAS250386S; etc..'
      />
      <Label> Series das maquinas:</Label>
      <Input
        onChangeText={textSeriesMachine => setSeriesMachine(textSeriesMachine)}
        placeholder='Series das maquinas'
      />

      <ViewButton>
        <Button title="VOLTAR" onPress={toBack} />
        <Button title="Proximo" onPress={navegaDetalhesValor} />
      </ViewButton >

    </Container>
  )
}
