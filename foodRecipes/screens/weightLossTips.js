import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'

class WeightLossTips extends Component {
    render() {
        return (
            <View style={{
                flex: 1,

            }}>

                <View style={{
                    flex: 0.8,
                    alignItems: 'center',
                    backgroundColor: "#ff5603",
                    flexDirection: 'row',
                    justifyContent: 'space-around'
                }}>
                    <Octicons name="three-bars"  size={30} color="white" />
                    <Text style = {{
                        color:'white',
                        fontSize:20,
                        fontWeight:'700'
                    }}>Weight Loss Tips</Text>
                    <AntDesign name="camera" size={30} color="white" />
                </View>

                <View style={{
                    flex: 8
                }}>

                    <ScrollView>
                        <Image
                            style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/bf.jpg")}
                        />

                        <View style={{
                            height: 50,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: '700',
                                fontSize: 30,
                                width: wp("90%"),
                                alignSelf: 'center'
                            }}>Do not skip breakFast
    </Text>
                        </View>

                        <View style={{
                            width: wp('98%'),
                            alignSelf: 'center'
                        }} >
                            <Text style={{
                                textAlign: "center",
                                fontSize: 17
                            }}>
                                Skipping Breakfast wont Help you lose weight.you could miss out an essential nutrient and you may end up snacking more throughout the day because you feel hungary.
    </Text>
                        </View>


                        <View style={{
                            width: wp('98%'),
                            marginTop: 10,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 16
                            }}>
                                Eating at regular times during the day helps burns calories at a faster rate.it also reduces the temptation to snack on foods high in fact and sugar.
    </Text>
                        </View>

                        <View>


                            <Image style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={require("../Assets/walking.jpg")}
                            />

<View style={{
                            height: 50,
                            justifyContent: 'center'
                        }}>
                            <Text style={{
                                fontWeight: '700',
                                fontSize: 30,
                                width: wp("90%"),
                                alignSelf: 'center'
                            }}>Add More Steps
    </Text>
                        </View>

                        <View style={{
                            width: wp('98%'),
                            alignSelf: 'center'
                        }} >
                            <Text style={{
                                textAlign: "center",
                                fontSize: 17
                            }}>
                                Get yourself a pedometer and gradully add more steps until you reach 10,000 per day.
                                throughout the day, do whatever you can be more active - pace while you talk to the phone, take a dog out for an extra walks, and march in place of during television commercials

    </Text>
                        </View>





                        </View>

                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default WeightLossTips;