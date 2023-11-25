import * as React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";
import { View, Text, StyleSheet, ScrollView, Alert, ImageBackground, TouchableOpacity, TextInput, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import SearchCard from '../components/SearchCard';


export default function SearchScreen({ navigation }) {

  const [dataSearch, setDataSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const navigation = useNavigation();

  const searchQuery = async () => {
    try {
      const config = { params: { q: searchTerm } };
      const response = await axios.get('https://api.jikan.moe/v4/manga?type=lightnovel&order_by=score&limit=10&sort=desc&q='+ searchTerm);
      return response.data.data;
    } catch (error) {
      console.log('Connection Timeout', error);
      return []; // Return empty array if there's an error
    }
  };

  const insertData = (data) => {
    setDataSearch(data);
  };

  const deleteData = () => {
    setDataSearch([]);
  };

  const handleSearch = async () => {
    deleteData();
    const response = await searchQuery();
    if (response.length > 0) {
      insertData(response);
    } else {
      console.log('https://api.jikan.moe/v4/manga?type=lightnovel&order_by=score&sort=desc&q='+ searchTerm);
    }
  };

    return (
      <ImageBackground style={{flex:1}} source={{ uri: 'https://static.zerochan.net/Tokoyami.Towa.full.3327178.jpg'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start'}}>
            <View style={{
                marginTop: 40, marginHorizontal: 10, alignSelf: 'stretch', padding: 10,
                borderRadius: 20, backgroundColor: 'rgba(123, 24, 204, 0.7)',
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TextInput
                    style={{ flex: 15, fontSize:16, fontWeight:"600", color:'rgba(255, 255, 255, 0.8)' }}
                    placeholder="Search for Light Novel Tittle"
                    value={searchTerm}
                    onChangeText={(text) => setSearchTerm(text)}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity style={{ flex: 2, borderRadius: 20, }}  onPress={handleSearch} >
                    <Icon name="search" size={30} color='rgba(0, 0, 0 , 0.8)' />
                </TouchableOpacity>
            </View>

            <ScrollView
                    horizontal={false} // Mengatur tampilan vertical
                    showsVerticalScrollIndicator={false}
                    style={{ flex:1 , alignSelf:'stretch', marginTop:10}}
                
            >
            {dataSearch.map((item, index) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', {data: item,})} >
                  <SearchCard key={item.mal_id ? item.mal_id.toString() : "defaultKey"} dataLN={item} /> 
              </TouchableOpacity>
                
            ))}
            </ScrollView>

        </View>
        </ImageBackground>
    );
}