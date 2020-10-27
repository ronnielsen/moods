import React from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import styled from 'styled-components';

export default function Header(props) {

  const Container = styled(View)`
    background: #FAFAFC;
    width: 100%;
    padding: 16px 32px;
    flex-direction: row;
    alignItems: center;
    alignSelf: stretch;
    background: #eee;
  `;

  const Label = styled(Text)`
    fontSize: 32px;
    fontWeight: 700;
    color: #121212;
    flex: 1;
  `;

  return (
    <Container>
      <Label>{props.label}</Label>
      {props.append}
    </Container>
  )
}
