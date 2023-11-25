import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Alert,
    ImageBackground,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TopCard from '../components/TopCard';
import HeaderTop from '../components/HeaderTop';

export default function TopLN({ route, navigation }) {

    // const apiUrl = "https://api.jikan.moe/v4/top/manga?type=lightnovel&page=";
    // let apiString = apiUrl + page.toString();

    const [dataLN, setDataLN] = useState([]);
    const [count,setCount] = useState(1);

    useEffect(() => {
        async function fetchDataLN() {
            try {
                const response = await axios.get("https://api.jikan.moe/v4/top/manga?type=lightnovel&page=" + count.toString() );
                setDataLN(response.data.data);
            } catch (error) {
                Alert.alert("Gagal mengambil data anime!", error.message);
            }
        }
        fetchDataLN();
    }, [count]);

    const prevButtonHandler = () => {
        const prevCount = count - 1;
        setCount(prevCount);
      };
    
      const nextButtonHandler = () => {
        const nextCount = count + 1;
        setCount(nextCount);
      };

    return (
        <ImageBackground
            source={{ uri: 'https://w0.peakpx.com/wallpaper/356/519/HD-wallpaper-anime-sky-portrait-display.jpg' }}
            style={{ flex: 1 }}
        >


            <View style={{ flex: 1, }}>
                <View
                    style={{
                        // borderWidth: 1,
                        marginHorizontal: 5,
                        marginTop: 40,
                        marginVertical: 4,
                        padding: 10,

                        borderBottomLeftRadius: 20,
                        borderBottomRightRadius: 20,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,

                        flexDirection: "row",
                        alignItems: "flex-end",

                        backgroundColor: 'rgba(123, 24, 204, 0.8)'
                    }}
                >
                    
                    <Text
                        style={{
                            flex: 10,
                            fontSize: 20,
                            marginHorizontal: 10,
                            color: 'rgba(255, 255, 255  , 0.5)',
                            fontWeight: "500",
                        }}
                    >
                        Page
                    </Text>

                    {count !== 1 ? (
                        <TouchableOpacity onPress= {prevButtonHandler} >
                            <Icon name="caret-back-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />
                        </TouchableOpacity>
                    ) : ("")}

                    <Text
                        style={{
                            fontSize: 20,

                            color: 'rgba(255, 255, 255  , 0.5)',
                            fontWeight: "600",
                        }}

                    >
                        {count}
                    </Text>

                    
                    <TouchableOpacity onPress={nextButtonHandler} >
                        <Icon name="caret-forward-outline" size={30} color='rgba(255, 255, 255  , 0.5)' />
                    </TouchableOpacity>
                    

                </View>

                <ScrollView
                    horizontal={false} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 0
                    }}
                >
                    {dataLN.map((item, index) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                            <TopCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} noRank={25* (count-1) + index + 1}  />
                        </TouchableOpacity>
                        
                    ))}
                </ScrollView>



            </View>
        </ImageBackground>

    );
}