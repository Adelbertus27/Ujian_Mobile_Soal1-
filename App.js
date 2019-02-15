import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, TextInput} from 'react-native';

export default class App extends Component {
  state = {Massa= '', Tinggi= ''}
  render() {
    return (
      <View style={{backgroundColor= 'lightblue'}}>
        <View style={[desain.box, desain.box1]}>
          <Text>
            INDEKS MASSA TUBUH
          </Text>
        </View>

        <View style={{padding: 25}}>
          <TextInput 
          style={{height: 50, width:25}} 
          placeholder='Massa (kg)' 
          keyboardType= 'default' 
          onChangeText= {(e)=>{this.setState({Massa:e})}}
          />
          <TextInput 
          style={{height: 50, width: 25}}
          placeholder='Tinggi (cm)'
          keyboardType= 'default'
          onChangeText= {(e)=>{this.setState({Tinggi:e})}}
          />
        </View>

        <View>
          <Button 
          color='blue'
          onPress = {()=>{
            imt = Massa / Tinggi * Tinggi / 100
            if(imt<18.5){
              this.setState({Massa:e})
              this.setState({Tinggi:e})
              this.setState('Indeks Massa Tubuh' + imt)
              this.setState('Berat badan anda kurang')
            } else if(imt > 18.5 && imt < 24.9){
              this.setState({Massa:e})
              this.setState({Tinggi:e})
              this.setState('Indeks Massa Tubuh' + imt)
              this.setState('Berat badan anda ideal')
            } else if(imt > 25.0 && imt < 29.9) {
              this.setState({Massa:e})
              this.setState({Tinggi:e})
              this.setState('Indeks Massa Tubuh' + imt)
              this.setState('Berat badan anda berlebih')
            } else if(imt > 30.0 && imt < 39.9){
              this.setState({Massa:e})
              this.setState({Tinggi:e})
              this.setState('Indeks Massa Tubuh' + imt)
              this.setState('Berat badan anda sangat berlebih')
            } else{
              this.setState({Massa:e})
              this.setState({Tinggi:e})
              this.setState('Indeks Massa Tubuh' + imt)
              this.setState('Berat badan anda termasuk obesitas')
            }
          }}
          > 
          HITUNG IMT
          </Button>
        </View>
      </View>
    );

  }
}

var desain = StyleSheet.create({
  box: {width: 100, length:100},
  box1: {flex: 1, backgroundColor:'darkblue'}
})