import React, {useState, useEffect} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import { SafeAreaProvider } from 'react-native-safe-area-context';



export default function App(){
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
   
            <ThemeProvider theme={theme}>
            <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'Counter App', style: { color: '#fff' } }}
                rightComponent={{ icon: 'home', color: '#fff' }}
            />
            <Grid>
                <Row style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text h1>{count}</Text>
                </Row>
                <Row>                    
                    <Col>
                        <Button type='solid' title="Dec (-)" onPress={onPressDec}/>
                    </Col>
                    <Col>
                        <Button type='solid' title="Inc (+)" onPress={onPressInc} />
                    </Col>                            
                </Row>
                <Row>
                    <Button type='outline' title="Reset Count" onPress={onPressResetCount}/>  
                </Row>
            </Grid>
            </ThemeProvider>

    );
}

const theme = {
    Button: {
      raised: true,
      color: 'auto',
      titleStyle:{          
          fontSize:30,
      },      
    },
  };
