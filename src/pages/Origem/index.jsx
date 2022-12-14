import React, { useState, useEffect, useContext } from 'react';
import { DataContext } from '../../../contexts/data';
import { Button } from 'react-native';
import BouncyCheckbox from "react-native-bouncy-checkbox";

import { Label, CheckboxView, ViewButton, Container, Title } from './style';

import { useNavigation } from '@react-navigation/native';

export default function Origem() {

  const [sp, setSp] = useState(false)
  const [am, setAm] = useState(false)
  const [showElementSp, setShowElementSp] = useState(true)
  const [showElementAm, setShowElementAm] = useState(true)
  const { data, setData } = useContext(DataContext)


  useEffect(
    function showOrHide() {
      if (sp) {
        setShowElementAm(false)
      }
      else {
        setShowElementAm(true)
      }

      if (am) {
        setShowElementSp(false)
      }
      else {
        setShowElementSp(true)
      }
    }, [sp, am])


  const navigation = useNavigation();

  function navegaCliente() {
    if (sp) {
      setData({...data,  origem: 'SP' })
    }
    else{
      setAm(false)
    }
    if (am) {
      setData({...data,  origem: 'AM' })
    }
    else{
      setSp(false)
    }
   Object.keys(data).forEach((item)=>{
      console.log(item + ' : ' + data[item])
    })
    navigation.navigate('Cliente')

  }

  return (
    <Container>

      <Title>
        <Label>Origem?</Label>
      </Title>

      <CheckboxView>

        <CheckboxView>
          {showElementSp ?
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: "none",
              }}
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text="São Paulo"
              iconStyle={{ borderColor: "blue" }}
              iconInnerStyle={{ borderWidth: 2 }}
              onPress={() => { sp ? setSp(false) : setSp(true) }} />
            : null}
        </CheckboxView>

        <CheckboxView>
          {showElementAm ?
            <BouncyCheckbox
              textStyle={{
                textDecorationLine: "none",
              }}
              size={25}
              fillColor="red"
              unfillColor="#FFFFFF"
              text="Amazonas"
              iconStyle={{ borderColor: "red" }}
              iconInnerStyle={{ borderWidth: 2 }}
              onPress={() => { am ? setAm(false) : setAm(true) }} />

            : null}
        </CheckboxView>

      </CheckboxView>

      <ViewButton>
        <Button title="PROXIMO" onPress={navegaCliente} />
      </ViewButton>

    </Container>
  )
}

