import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground , TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import GenreCard from '../components/GenreCard';
import SearchScreen from './SearchScreen';

const useFetchDataLN = (idGenre) => {
    const [dataLN, setDataLN] = useState([]);
    const [count, setCount] = useState(1);
  
    const genre = idGenre;
    useEffect(() => {
      async function fetchDataLN() {
        try {
          const response = await axios.get("https://api.jikan.moe/v4/manga?type=lightnovel&order_by=score&sort=desc&genres=" + idGenre.toString() + "&limit=20");
          setDataLN(response.data.data);
        } catch (error) {
          Alert.alert("Gagal mengambil data manga!", error.message);
        }
      }
      fetchDataLN();
    }, [count]);
  
    return dataLN;
  };

export default function HomeScreen({ navigation }) {
    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} >
            <TouchableOpacity onPress={() => navigation.navigate('Search')}
                style={{ 
                    marginTop:40, marginHorizontal:10, alignSelf:'stretch', padding:10,
                    borderRadius:20, backgroundColor: 'rgba(123, 24, 204, 0.2)',
                    flexDirection:'row',
                    alignItems:'center'
                }}>
                <Icon name="search" size={30} color='rgba(0, 0, 0 , 0.8)' />
                <Text style={{
                    paddingLeft:10,
                    fontSize:16,
                    fontWeight:500,
                    alignItems:'flex-end'

                }}>
                    Search for Light Novel
                </Text>
                
            </TouchableOpacity>


            <ImageBackground source={{ uri: 'https://as1.ftcdn.net/v2/jpg/05/85/26/18/1000_F_585261822_beEWf2Ka3GE5j6ko0UMyWPWLXyLE1MRl.jpg' }}
                style={{ height:200, width:385, marginVertical:20, borderRadius:30 }}
            >
                <View
                    style={{
                        flex:1,
                        marginVertical: 0,
                        marginHorizontal: 15,
                        flexDirection: 'row',
                        justifyContent: "center",
                        alignItems: "center"
                    }}
                >
                    <Text style={{ color:'rgba(255, 255, 255, 0.6)', fontSize:60, fontWeight:800 }}>MyLN</Text>
                    <View
                    style={{
                     
                        marginVertical: 0,
                        marginLeft: 50,
                        paddingHorizontal: 15,
                        borderRadius: 0,
                        backgroundColor: 'rgba(165, 14, 236, 0.4)',
                        flexDirection: 'column',
                        alignSelf: 'center', alignItems:'center'
                    }}
                    >
                        <Text style={{ color:'rgba(255, 255, 255, 0.8)', fontSize:20, fontWeight:400, marginVertical:8 }}>FIND</Text>
                        <Text style={{ color:'rgba(255, 255, 255, 0.8)', fontSize:20, fontWeight:400, marginVertical:8  }}>YOUR</Text>
                        <Text style={{ color:'rgba(255, 255, 255, 0.8)', fontSize:20, fontWeight:400, marginVertical:8  }}>LIGHT</Text>
                        <Text style={{ color:'rgba(255, 255, 255, 0.8)', fontSize:20, fontWeight:400, marginVertical:8  }}>NOVEL</Text>

                    </View>
                </View>
            </ImageBackground>

            <ScrollView
                horizontal={false} // Mengatur tampilan vertical
                showsVerticalScrollIndicator={false}
                style={{  }}
            >
                <Text 
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        marginVertical: 5,
                        marginHorizontal:10
                    }}
                > Romance </Text>
                <ScrollView
                    horizontal={true} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    Style={{
                        paddingBottom: 0
                    }}
                >
                    {useFetchDataLN(22).map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                            <GenreCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} />
                        </TouchableOpacity>
                        
                    ))}
                </ScrollView>

                <Text 
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 5,
                        marginTop: 15,
                        marginHorizontal:10
                    }}
                > Action </Text>
                <ScrollView
                    horizontal={true} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    style={{
                        marginBottom:10
                    }}
                >
                    {useFetchDataLN(1).map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                            <GenreCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text 
                    style={{
                        fontSize: 18,
                        fontWeight: "600",
                        marginBottom: 5,
                        marginTop: 15,
                        marginHorizontal:10
                    }}
                > Fantasy </Text>
                <ScrollView
                    horizontal={true} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        paddingBottom: 0
                    }}
                >
                    {useFetchDataLN(10).map((item) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                            <GenreCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
                  
            </ScrollView>
            
        </View>
    );
}