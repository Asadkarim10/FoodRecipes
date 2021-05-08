import React, { Component } from 'react';
import { Text, View, Image, ScrollView,StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import RBSheet from "react-native-raw-bottom-sheet";



class Home extends Component {
    render(props) {
        return (
            <View style={styles.Container}>
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

                        <View style={{
                            flexDirection: 'row',
                            marginTop: 30,
                            justifyContent: "space-around"
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
                                    source={require("../Assets/bf.jpg")}
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
                                <TouchableOpacity onPress={() => this.props.navigation.navigate('heartylunch')}  >
                                    <Image
                                        style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                        source={require("../Assets/noodels1.jpg")}
                                    />
                                    <View style={{
                                        width: wp("42%"),
                                        alignSelf: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold'
                                        }}>Heartly lunch</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>The recipes</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>for health</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: "space-around"
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

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('heartylunch')}  >
                                    <Image
                                        style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                        source={require("../Assets/noodles.jpg")}
                                    />
                                    <View style={{
                                        width: wp("42%"),
                                        alignSelf: 'center'
                                    }}>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: 'bold'
                                        }}>healthy dinner</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>we streng health</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>and sleep</Text>
                                    </View>
                                </TouchableOpacity>
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
                                <TouchableOpacity onPress={() => this.RBSheet.open()}>
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
                                        }}>best snacks</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>replenish energy</Text>
                                        <Text style={{
                                            fontSize: 15,
                                            fontWeight: '800'
                                        }}>and vitamins</Text>
                                    </View>

                                </TouchableOpacity>
                            </View>

                        </View>


                        <RBSheet
                            ref={ref => {
                                this.RBSheet = ref;
                            }}
                            height={450}
                            openDuration={250}
                            customStyles={{
                                container: {
                                    borderTopRightRadius: 10,
                                    borderTopLeftRadius: 10
                                    //    justifyContent: "center",
                                    //      alignItems: "center"
                                }
                            }}
                        >
                            <View style={{
                                marginTop: 40,


                            }}>
                                <Image
                                    style={{ width: wp("100%"), height: 200, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                    source={require("../Assets/food.jpg")}
                                />

                            </View>
                            <View style={{
                                height: 200,
                                justifyContent: 'center'
                            }}>
                                <Text style={{
                                    textAlign: 'center',
                                    fontSize: 20
                                }}>Food is your smart cooking sidekick, offering personalized guidance every step of the way. from recipe recommendation just for you, to handy tools and helpful videos, caola food has everthing you need to improve life in the kitchen. experience what millions are enjoying on the web, free on your IOS device.</Text>
                            </View>
                        </RBSheet>



                        <View style={{
                            flexDirection: 'row',
                            marginTop: 10,
                            justifyContent: "space-around"
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
                                    source={require("../Assets/exe.jpg")}
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

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('weightLossTips')}  >

                                    <Image
                                        style={{ width: wp("45%"), height: 150, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                        source={require("../Assets/exe.jpg")}
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
                                </TouchableOpacity>
                            </View>
                        </View>






                    </ScrollView>

                </View>
            </View>
        );
    }
}

export default Home;



const styles = StyleSheet.create({
Container: {
    flex: 1,
    backgroundColor: 'white'
    },

    miniContainer1: {
        width: '88%',
        height: 50,
        paddingLeft: 15,
        alignSelf: 'center',
        backgroundColor: '#f05a5c',
        borderRadius: 25,
        marginTop: 15,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Text1: {
        color: 'white',
        fontSize: 15
    },
    img: {

    }
});

