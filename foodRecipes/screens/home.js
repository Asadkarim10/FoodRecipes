import React, { Component } from 'react';
import { Text, View, Image ,ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class Home extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>

            

                <View style={{
                    flex: 1.5,
                    backgroundColor: "#ff5603",
                    justifyContent: 'flex-end',
                }}>
                    <View style={{
                        alignSelf: "flex-end",
                        width: wp("70%"),
                        marginBottom: 8
                    }}>
                        <Text style={{
                            fontSize: 40,
                            fontWeight: "bold",
                            color: 'white'
                        }}>Food - Recipes</Text>
                    </View>

                </View>
                <View style={{
                    flex: 8,
                    backgroundColor: "#edf1ec"
                }}>
                    <ScrollView>

                    <View style = {{
                        flexDirection:'row',
                        marginTop:30,
                        justifyContent:"space-around"
                    }}>                    

                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>


                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>

                    </View>


                        
                    <View style = {{
                        flexDirection:'row',
                        marginTop:10,
                        justifyContent:"space-around"
                    }}>                    

                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>


                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>

                    </View>




                        
                    <View style = {{
                        flexDirection:'row',
                        marginTop:10,
                        justifyContent:"space-around"
                    }}>                    

                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>


                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        elevation: 5,
                        backgroundColor: 'white',
                        height: 220,
                        width: wp("45%"),
                        borderRadius: 10
                    }}  >

                        <Image
                            style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/burger.jpg")}
                        />
                        <View style={{
                            width: wp("42%"),
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: 'bold'
                            }}>Healthy Breakfast</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Tasty & Healthy</Text>
                            <Text style={{
                                fontSize: 15,
                                fontWeight: '800'
                            }}>Breakfast Recipes</Text>
                        </View>
                    </View>

                    </View>






                    </ScrollView>
                </View>
            </View>
        );
    }
}

export default Home;



// const styles = StyleSheet.create({
//     miniContainer: {
//         width: '88%',
//         height: 50,
//         paddingLeft: 15,
//         alignSelf: 'center',
//         backgroundColor: '#ffffff',
//         borderRadius: 25,
//         marginBottom: 10
//     },

//     miniContainer1: {
//         width: '88%',
//         height: 50,
//         paddingLeft: 15,
//         alignSelf: 'center',
//         backgroundColor: '#f05a5c',
//         borderRadius: 25,
//         marginTop: 15,
//         alignItems: 'center',
//         justifyContent: 'center'
//     },
//     Text1: {
//         color: 'white',
//         fontSize: 15
//     },
//     img: {

//     }
// });

