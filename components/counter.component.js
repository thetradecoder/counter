import React, {useState} from 'react';
import {Container, Content, Text, Button, Input, Left, Right} from 'native-base';


export default function Counter(){
    const [count, setCount] = useState(0);
    const [countVar, setCountVar] = useState(1);
    function onPressInc(){
        setCount(count + countVar);
    }
    function onPressDec(){
        setCount(count - countVar);
    }
    function onPressResetCount(){
        setCount(0);       
    }
    function onPressResetCountVar(){
        setCountVar(1);
    }
    function onChangeCountVar(e){
        setCountVar(Number(e.target.value))
    }
    return (
        <Container>
            <Content padder>
                <Right>
                    <Text>{count}</Text>
                </Right>        
                <Left><Button rounded onPress={onPressDec}><Text>Dec (-)</Text></Button></Left>
                <Right><Button rounded onPress={onPressInc}><Text>Inc (+)</Text></Button></Right>
                
                
                <Input keyboardType="numeric" value={countVar} onChange={onChangeCountVar}/>
                <Button block danger onPress={onPressResetCount}><Text>Reset Result</Text></Button>
                <Button block warning onPress={onPressResetCountVar}><Text>Reset Variation</Text></Button>
            </Content>
        </Container>
    );
}