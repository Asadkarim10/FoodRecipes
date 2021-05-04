import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
                    <Text>Icons</Text>
                    <Text>Weight Loss Tips</Text>
                    <Text>Icons</Text>
                </View>

                <View style={{
                    flex: 8
                }}>


                    <Image
                        style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        source={require("../Assets/bf.jpg")}
                    />

<View style = {{
    height:50,
    justifyContent:'center'}}>
    <Text style = {{
        fontWeight:'700',
        fontSize:30,
        width:wp("90%"),
        alignSelf:'center'
    }}>Do not skip breakFast
    </Text>
</View>

<View style = {{
    width:wp('96%'),
    alignSelf:'center'
}} >
    <Text style = {{
        textAlign:"center",
        fontSize:15
    }}>
        Skipping Breakfast wont Help you lose weight.you could miss out an essential nutrient and you may end up snacking more throughout the day because you feel hungary.
    </Text>
</View>


<View>
    <Text>
    Eating at regular times during the day helps burns calories at a faster rate.it also reduces the temptation to snack on foods high in fact and sugar.
    </Text>
</View>

<View>


<Image                  style={{ width: wp("94%"), borderRadius: 20, alignSelf: 'center', height: 190, marginTop: 15, borderTopLeftRadius: 10, borderTopRightRadius: 10 }}
                        source={require("../Assets/walking.jpg")}
                    />

</View>


                </View>

            </View>
        );
    }
}

export default WeightLossTips;