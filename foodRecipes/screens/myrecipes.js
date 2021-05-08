import React, { Component } from 'react';
import { Text,Modal, View, Image,Pressable, ScrollView,StyleSheet,TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo';
import { TextInput } from 'react-native-gesture-handler';


class Myrecipes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user:"",
          MyRecipeName: '',
          MyRecipes:'',
          NewRecipes:'',
          NewRecipesName:'',
          modalVisible: false

          
        }
      }

      
  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }




      getData = async () => {
        try {
          const user = await AsyncStorage.getItem('myrecipes')
          const userP = await JSON.parse(user)
          this.setState({ NewRecipesName: userP.RecipeName })
          this.setState({ NewRecipes: userP.MyRecipes })
          console.log("asadkarim")
         
        }
    
        catch (e) {
          console.log(e)
        }
      }






      onSubmit = async() => {
          console.log("asad")
        try {
         await AsyncStorage.setItem("myrecipes",JSON.stringify({
            MyRecipes:this.state.MyRecipes,
          MyRecipeName:this.state.MyRecipeName, 
          }))
         
         // Display the current state of numbers
        // this.setState({MyRecipes:MyRecipes})
        // this.setState({MyRecipeName:MyRecipeName})
                
        } 
  
        catch (error) {
          console.log(error)
          // saving error
        }
      }





    
    render() 
    
    {

const { modalVisible } = this.state;

        return (
            <View style={{
                flex: 1,
                backgroundColor:'white'

            }}>

                <View style={{
                    flex: 1.5,
                    backgroundColor: "#ff5603",
                }}>

                    <View style = {{
                        flexDirection:'row',
                        height:50,
                        width:wp("95%"),
                        alignItems:'center',
                        justifyContent:'space-between'
                    }}>
                        <Text style = {{
                        fontSize:22,
                        color:'white',
                        marginLeft:10,
                        fontWeight:'700'

                        
                        }}>Edit</Text>
                        <TouchableOpacity onPress={() => this.setModalVisible(!modalVisible)}>
                        <Entypo name="plus"  size={30} color="white" />               
                        </TouchableOpacity>
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

                    <View>

                    <Image
                     style={{ width: wp("96%"),alignSelf:'center', marginTop:5 ,height: 200, borderRadius:5 }}
                     source={require("../Assets/recipes.jpg")}
                                />


                    </View>

                    <ScrollView>
              

                        <View style={{
                            height: 50,
                            justifyContent: 'center'}}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                width: wp("90%"),
                                alignSelf: 'center'
                            }}>{this.state.NewRecipes}</Text>
                        </View>


                        <View style={{
                            height: 200,
                            justifyContent: 'center'}}>
                            <Text style={{
                                fontWeight: '600',
                                fontSize: 20,
                                textAlign:'center',
                                width: wp("90%"),
                                alignSelf: 'center'
                            }}>{this.state.NewRecipesName}</Text>
                        </View>

                      
                        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.setModalVisible(!modalVisible);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <View style = {{
                    width:wp('70%')
                }}>
              <Text style={styles.modalText}>
                New Recipes  </Text>
                <Text style={styles.modalText}>
                Add new recipe to personal collection  </Text>
                </View>
                <TextInput        multiline={true}
                     onChangeText={(RecipeName) =>
                        this.setState({ RecipeName: RecipeName })
                      }
                 style = {{
                    width:wp('60%'),
                    height:40,
                    borderColor:'#f5efec',
                    borderWidth:2,
                    marginTop:10,
                     paddingLeft:5,
                    numberOfLines:8,
                    borderRadius:7,
                    backgroundColor:'white'
                }} />

<TextInput        multiline={true}
onChangeText={(MyRecipes) =>
    this.setState({ MyRecipes: MyRecipes })
  }
style = {{
   width:wp('60%'),
   marginTop:3,
   paddingLeft:5,
   borderColor:'#f5efec',
   borderWidth:2,
   height:40,
   marginTop:10,
   numberOfLines:8,
   borderRadius:7,
   backgroundColor:'white'
}} />


                    <View style = {
                        {
                            width:wp('76%'),
                            height:70,
                            marginTop:6,
                            flexDirection:'row',
                            alignSelf:'center',
                            borderTopWidth:1,
                            borderTopColor:'#e2c8b7',
                            alignContent:'center',
                            justifyContent:'center'
                        }
                    }>


                <View style = {{
                    flexDirection:"row",
                    alignItems:'center',
                    justifyContent:'space-around',
                    width:wp('68%'),

                }}>
              <Pressable
                
                onPress={() => this.setModalVisible(!modalVisible)}
              >
                <Text style={{
                    color:'#3097e2',
                    fontSize:20,
                 fontWeight:'bold'
                }}>Cancel</Text>
              </Pressable>

              <View style={styles.verticleLine}></View>

              <TouchableOpacity   onPress={() => this.onSubmit()}  > 
                  <Text style = {{
                 color:'#3097e2',
                 fontSize:20,
                 fontWeight:'bold'
                  }}>Add</Text>
              </TouchableOpacity>

              </View>
              </View>
            </View>
          </View>
        </Modal>
       
                       

                    </ScrollView>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
    //  justifyContent: "center",
      alignItems: "center",
      marginTop: 150,
    },
    modalView: {
      //margin: 20,
      width:wp("80%"),
      borderColor:'#f5efec',
      height:250,
      backgroundColor: "white",
      backgroundColor: "transparent",
      backgroundColor:'#f7e3ca',

      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      width:wp("69%"),
      fontSize:14,
      fontWeight:"500",
      textAlign:'center',
      alignSelf:'center'
    },

    verticleLine:{
        height: '75%',
        width: 1,
        backgroundColor: '#909090',
      },
  });






export default Myrecipes;