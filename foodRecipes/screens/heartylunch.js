import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icons from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Octicons from 'react-native-vector-icons/Octicons'


class Heartylunch extends Component {
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
                    <Octicons
 name="three-bars"  size={30} color="white" />
                    <Text style = {{
                        color:'white',
                        fontSize:20,
                        fontWeight:'700'
                    }}>Hearty lunch</Text>
                    <AntDesign name="camera" size={30} color="white" />
                </View>

                <View style={{
                    flex: 8
                }}>

                    <ScrollView>
                        <Image
                            style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                            source={require("../Assets/noodles.jpg")}
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
                            }}>Zucchini Noodles
    </Text>
                        </View>

                        <View style={{
                            width: wp('97%'),
                            alignSelf: 'center'
                        }} >
                            <Text style={{
                                textAlign: "center",
                                fontSize: 14
                            }}>
                                Using a spiral vegetable slicer or a vegetable peeler,cut zucchini lengthwise into long. thin strands or strips. Stop when you reach the seeds int he middle. Place the zucchini noodles ina colander and toss with teaspoon salt . Let drain for 15 to 30 minutes, then gently squeeze to romove any excess water. </Text>
                        </View>


                        <View style={{
                            width: wp('96%'),
                            marginTop: 10,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 14
                            }}>
                                Meanwhile, combile avacado, basil, pistachios, lemon juice, pepper and the remaining 1 teaspoon salt ina food processor. Pulse until finely chopped. Add 1 cup oil and process until smooth
                            </Text>
                        </View>


                        <View style={{
                            width: wp('98%'),
                            marginTop: 10,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 14
                            }}>
                                Heat 1 tablespoon oil in a large skillet over meduim - high heat. add garlic and cook. striing for 30 seconds . add shrimp and sprinkle with old bay : cook, striring occasionally, until the shrimp iis alomst cooked through, 3 ro 4 minutes . transfer to a large bowl.
                            </Text>
                        </View>

                        <View style={{
                            width: wp('97%'),
                            marginTop: 10,
                            alignSelf: 'center'
                        }}>
                            <Text style={{
                                textAlign: "center",
                                fontSize: 14
                            }}>Add the remaining 1 teaspoon oil to the pan. Add the drained zucchini noodles and gently toss until hot, about 3 minutes Transher to the bowl, add the pesto and gentaly toss to combine.                            </Text>
                        </View>

                        <View>


                            <Image style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                                source={require("../Assets/noodels1.jpg")}
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

export default Heartylunch;