import { View, Text, Image, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from 'react';

import Icon from 'react-native-vector-icons/Ionicons';

const HeaderTop = ({ datapage, navigation }) => {
    let page = datapage;

    return (
        <View
            style={{
                // borderWidth: 1,
                marginHorizontal:5,
                marginTop:40,
                marginVertical: 4,
                padding:10,
                
                borderBottomLeftRadius:20,
                borderBottomRightRadius:20,
                borderTopLeftRadius:20,
                borderTopRightRadius:20,

                flexDirection: "row",
                alignItems: "flex-end",
                
                backgroundColor: 'rgba(123, 24, 204, 0.8)'
            }}
        >
            
            <Text
                style={{
                    flex:10,
                    fontSize: 20,
                    marginHorizontal:10,
                    color: 'rgba(255, 255, 255  , 0.5)',
                    fontWeight: "500",
                }}
            
            >
                Page
            </Text>

            <TouchableOpacity  > 
                <Icon name="caret-back-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />
            </TouchableOpacity> 

            <Text
                style={{
                    fontSize: 20,
                    
                    color: 'rgba(255, 255, 255  , 0.5)',
                    fontWeight: "600",
                }}
            
            >
                {page}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate('Top', {data:page+1})} >
                <Icon name="caret-forward-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />   
            </TouchableOpacity>

        </View>
    );






}

export default HeaderTop;
