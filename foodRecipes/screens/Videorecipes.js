import React, { Component } from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Video from 'react-native-video'


class Videorecipes extends Component {
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
                        justifyContent:'flex-end'
                    }}>

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
                        }}>Video Recipes</Text>
                    </View>

                </View>

                <View style={{
                    flex: 8
                }}>

                    <ScrollView>
                    <Video
source={{ uri: 'https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4?_=1' }}
style={{ width: 300, height: 300 }}
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

                      
                       

                    </ScrollView>
                </View>

            </View>
        );
    }
}

export default Videorecipes;