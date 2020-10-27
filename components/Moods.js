import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, Text, View } from 'react-native';
import styled from 'styled-components';

export default function Moods(props) {

  const Container = styled(View)`
    height: 96px;
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
  `;

  const Option = styled(TouchableHighlight)`
    height: 48px;
    width: 48px;
    marginLeft: 8px;
    marginRight: 8px;
    borderRadius: 45px;
    background: white;
    border: 1px solid #DADAD9;
    alignItems: center;
    justifyContent: center;
  `;

  const Icon = styled(Text)`
    fontSize: 24px;
    color: #a1a1a1;
  `;

  const numbers = [1,2,3,4,5];

  return (
    <Container>
      {numbers.map((x, index) =>
        <Option
          onPress={() => (props.setMood(index + 1), props.setScreen(2))}
          key={index}>
          <Icon>{x}</Icon>
        </Option>
      )}
    </Container>
  )
}
