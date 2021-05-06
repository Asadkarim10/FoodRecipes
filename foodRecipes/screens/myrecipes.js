import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';


class Myrecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
          MyRecipes: '',
          
        }
      }


      onSubmit = async() => {
        try {
         await AsyncStorage.setItem("myrecipes",JSON.stringify({
          name:this.state.MyRecipes, 
          }))
         
         // Display the current state of numbers
        this.setState({name1:name1})
        this.setState({name2:name2})
  
        } 
  
        catch (error) {
          console.log(error)
          // saving error
        }
      }


    
    render() {
        return (
            <View style={{
                flex: 1,

            }}>

                <View style={{
                    flex: 1.5,
                    backgroundColor: "#ff5603",
                }}>

                    <View style = {{
                        flexDirection:'row',
                        height:50,
                        alignItems:'center',
                        marginRight:5,
                        justifyContent:'space-between'
                    }}>
                        <Text>Edit</Text>
                        <Text>Asad</Text>
                    </View>
                  
                    
                    <View style = {{
                        flexDirection:'row',

                        justifyContent:'flex-start'
                    }}>

                        <Text style = {{
                            fontSize:30,
                            marginLeft:10,
                            color:'white',
                            fontWeight:"700"
                        }}>My Recipes</Text>
                    </View>

                </View>

                <View style={{
                    flex: 8
                }}>

                    <ScrollView>
              

                        <View style={{
                            height: 50,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                width: wp("90%"),
                                alignSelf: 'center'
                            }}>Rasberry-peach-Mango Smoothie Bowl
    </Text>
                        </View>

                      
                       

                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default Myrecipes;