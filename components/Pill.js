import React, { useRef, useState, useEffect } from 'react'
import { View, TouchableWithoutFeedback, Text } from 'react-native';
import styled from 'styled-components';

export default function Pill(props) {
  const [isActive, setActive] = useState(false);

  const Container = styled(View)`
    backgroundColor: #EAEAED;
    borderRadius: 16px;
    marginTop: 16px;
    padding: 16px;
    flexDirection: row;
    color: black;
    alignItems: center;
    width: auto;
    alignSelf: flex-start
  `;

  const Highlight = styled(Container)`
    backgroundColor: black;
    color: white;
  `;

  const HighlightText = styled(Text)`
    color: white;
  `;

  function handleAdd() {
    setActive(true),
    props.setMood(0)
    //props.setStagedReasons([...props.stagedReasons, {emoji: props.emoji, name: props.name}])
  }

  function handleRemove() {
    setActive(false),
    props.setMood(5)
  }

  return (
    <View>
      {isActive ? (
        <TouchableWithoutFeedback
          onPress={() => handleRemove()}
        >
          <Highlight>
            <HighlightText style={{marginRight: 8}}>{props.emoji}</HighlightText>
            <HighlightText>{props.name}</HighlightText>
          </Highlight>
        </TouchableWithoutFeedback>
      ) : (
        <TouchableWithoutFeedback
          onPress={() => handleAdd()}
        >
          <Container>
            <Text style={{marginRight: 8}}>{props.emoji}</Text>
            <Text>{props.name}</Text>
          </Container>
        </TouchableWithoutFeedback>
      )}
    </View>
  )
}
