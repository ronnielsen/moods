import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button, Text, View, StyleSheet, ScrollView, TouchableHighlight, TouchableOpacity } from 'react-native';
import { Header, Moods, Nav, StyledButton, Title, Box, Pill } from '../components';

export default function Home(props) {

  var emoji;
  var moodText = "Error";

  const Container = styled(View)`
    background: #FAFAFC;
    flex: 1;
  `;

  const Flex = styled(View)`
    flex: 1;
    alignSelf: stretch;
    alignItems: center;
    justifyContent: center;
  `;

  const Result = styled(Text)`
    fontSize: 80px;
    fontWeight: 700;
  `;

  const Texty = styled(Text)`
    fontSize: 64px;
    fontWeight: 700;
    padding: 0px 32px;
  `;

  const [mood, setMood] = useState(1);
  const [screen, setScreen] = useState(2);

  const [stagedReasons, setStagedReasons] = useState([]);

  if (mood === 1) {
    emoji = <Result>☹️</Result>;
    moodText = <Text>Aw, I'm sorry.</Text>;
  } else if (mood === 2) {
    emoji = <Result>😕</Result>;
    moodText = <Text>That bad?</Text>;
  } else if (mood === 3) {
    emoji = <Result>😐</Result>;
    moodText = <Text>Alright, not bad.</Text>;
  } else if (mood === 4) {
    emoji = <Result>🙂</Result>;
    moodText = <Text>Glad, you're doing well.</Text>;
  } else {
    emoji = <Result>😀</Result>;
    moodText = <Text>Dude, awesome!</Text>;
  }

  return (
    <>
      {screen === 0 ?
        (
          <Container>
            <Header/>
            <Title label="Yo, Ron!"/>
            <Flex>
              <Texty>
                Happy Friday. 🥳
              </Texty>
            </Flex>
            <StyledButton onPress={() => setScreen(1)} label="get started"/>
          </Container>
        ) : screen === 1 ?
        (
          <Container>
            <Nav setScreen={setScreen} to={0}/>
            <Title label="Well..."/>
            <Flex>
              <Texty>
                How's it going?
              </Texty>
            </Flex>
            <Moods setMood={setMood} setScreen={setScreen}/>
          </Container>
        ) : screen === 2 ?
        (
          <Container>
            <Nav setScreen={setScreen} to={1}/>
            <Title label={moodText}/>
            <Flex>
              <Texty>
                {mood}{emoji}
              </Texty>
              <Text>Any particular reason?</Text>
              <View>
                {props.reasons.map((x, index) =>
                  <Pill
                    key={x.name + index}
                    name={x.name}
                    emoji={x.emoji}
                    setStagedReasons={setStagedReasons}
                    stagedReasons={stagedReasons}
                    mood={mood}
                    setMood={setMood}
                  />
                )}
              </View>
            </Flex>
            <View>
              <Text>Staged Reasons:</Text>
              {stagedReasons.map((x, index) => <Text key={x.name + index}>{x.emoji}{x.name}</Text>)}
            </View>
            <StyledButton
              label="save mood"
              onPress={() => (
                setScreen(3),
                props.setResults(
                  [...props.results,
                    {score: mood, reason:
                      [
                        {emoji: '🏠', name:'Home'},
                        {emoji: '👨‍💻', name: 'Work'}
                      ]
                    }
                  ]
                ),
                props.setReasons(
                  [...props.reasons],
                  props.reasons[0].scores.push(mood)
                )
              )}
            />
          </Container>
        ) :
        (
          <Container>
            <Nav setScreen={setScreen} to={2}/>
            <Title label="Right on!"/>
            <Flex>
              <Texty>
                We've logged your mood.
              </Texty>
            </Flex>
            <StyledButton onPress={() => (setScreen(0), console.log(props.results))}/>
          </Container>
        )
      }
    </>
  )
}
