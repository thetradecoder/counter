import React, {useState} from 'react';
import { ThemeProvider, Header, Text, Button, Input } from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import {SafeAreaProvider} from 'react-native-safe-area-context';


export default function App(){
    const [count, setCount] = useState(0);
    const [countVar, setCountVar] = useState(1);
    function onPressInc(){
        setCount(count+countVar);
    }
    function onPressDec(){
        setCount(count-countVar);
    }
    function onPressResetCount(){
        setCount(0);       
    }
    function onPressResetCountVar(){
        setCountVar(1);
    }
    
    function onChangeCountVar(e){
        if(e===""){
            setCountVar(1)
        } else{
        setCountVar(parseInt(e))
    }
    }
    
    return (
        <SafeAreaProvider>
   
            <ThemeProvider theme={theme}>
            <Header               
                centerComponent={{ text: 'Easy Counter App', style: { color: 'white', fontSize:20 } }}
                rightComponent={{text:'1.0', style:{color:'white', fontSize:18}}}               
            />
            <Grid>
                <Row style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                    <Text h1>{count}</Text>
                </Row>
                <Row style={{padding:10, maxHeight:80}}>                    
                    <Col>
                        <Button type='outline'  title="Reset Count" onPress={onPressResetCount}/>
                    </Col>
                </Row>
                               
                <Row style={{padding:10, maxHeight:120}}>   
                    <Col style={{marginRight:30}}>
                        <Button type='solid' title="Dec. (-)" onPress={onPressDec}/>
                    </Col>
                
                    <Col style={{marginLeft:30}}>
                        <Button type='solid' title="Inc. (+)" onPress={onPressInc} />
                    </Col>                            
                </Row>
                
                
                <Row style={{padding:10}}>
                    <Col>
                    <Text style={{fontSize:16}}>Inc/Dec. by</Text>                    
                       <Input defaultValue={countVar.toString()} autoCorrect={false} style={{fontSize:30, color:'red' }} keyboardType="numeric" onChangeText={onChangeCountVar}/>
                    </Col>
                    <Col>
                       <Button type='outline' title="Reset" onPress={onPressResetCountVar}/>                     
                    </Col> 
                </Row>
                
                <Row style={{justifyContent:'center', alignItems:'center', backgroundColor:'#2171EE', height:60}}>
                    <Text style={{color:'white', fontSize:20}}>Dev: Mamun @ TradeCoder</Text>
                </Row>
            </Grid>
            </ThemeProvider>
            </SafeAreaProvider>

    );
}

const theme = {
    Button: {
      raised: true,
      color: 'auto',
      titleStyle:{          
          fontSize:30,
      },
      Input:{
          color:'red',
      }
    },
  };
