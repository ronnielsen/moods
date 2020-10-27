import React from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components';
import { Header } from '../components';

export default function Settings() {

  const Container = styled(View)`
    height: 100%;
    width: 100%;
    background: #FAFAFC;
  `;

  return (
    <Container>
      <ScrollView>
        <Header title='Settings'/>
      </ScrollView>
    </Container>
  )
}
