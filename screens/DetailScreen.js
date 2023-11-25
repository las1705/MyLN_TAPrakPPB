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
    TouchableOpacity,
    Image,

} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import TopCard from '../components/TopCard';

export default function DetailScreen({ route, navigation }) {
    const { data } = route.params;

    const title = data.title;

    let titleHead = title;
    const length = 25;
    if (title.length > length) {
        titleHead = titleHead.substring(0, length) + "...";
    }

    const allAuthors = [];
    data.authors.map((item, index) => {
        allAuthors.push(item.name);
    });

    const allGenres = [];
    data.genres.map((item, index) => {
        allGenres.push(item.name);
    });
    const allThemes = [];
    data.themes.map((item, index) => {
        allThemes.push(item.name);
    });
    console.log((allGenres).join(', '));
    console.log((allThemes).join(', '));


    const img = data.images.jpg.large_image_url || "https://avatars.githubusercontent.com/u/116475964?v=4";

    return (

        <View style={{ flex: 1, backgroundColor: 'rgba(255, 255, 255, 1.0)' }}>
            <View
                style={{
                    height: 25, width: 385,
                    backgroundColor: 'rgba(165, 14, 236, 0.0)'
                }}
            ></View>

            <TouchableOpacity
                style={{
                    padding: 15,
                    backgroundColor: 'rgba(165, 14, 236, 0.0)',
                    flexDirection: 'row',
                }}
            >
                <Icon name="arrow-back-outline" 
                    size={30} color='rgba(0, 0, 0, 1.0)' 
                    paddingRight={10} onPress={() => navigation.goBack()} 
                />
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: 500,
                        color: 'rgba(0, 0, 0, 1)'
                    }}
                >
                    {titleHead} </Text>

            </TouchableOpacity>

            <View
                style={{
                    marginVertical: 5,
                    marginHorizontal: 15,
                    padding: 15,
                    borderRadius: 30,
                    backgroundColor: 'rgba(165, 14, 236, 1)',
                    flexDirection: 'row',
                }}
            >
                <Image source={{ uri: img }} style={{ height: 225, width: 160, borderRadius: 20 }} />
                <View style={{ flex: 1, flexDirection: 'column', paddingHorizontal: 15, alignItems: 'center', justifyContent: 'flex-start' }}>
                    <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 15, color: 'rgba(255, 255, 255, 1)', }}>
                        Statisctics
                    </Text>

                    <Text style={{ fontSize: 16, fontWeight: 400, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        Score
                    </Text>
                    <Text style={{ fontSize: 22, fontWeight: 600, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        {data.score}
                    </Text>
                    
                    <Text style={{ fontSize: 16, fontWeight: 500, paddingBottom: 15, color: 'rgba(255, 255, 255, 1)' }}>
                        {/* Rank #{(page-1)*25 + noIndex+1} */}
                        Rank #{data.rank}
                    </Text>

                    <Text style={{ fontSize: 15, fontWeight: 400, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        Members
                    </Text>
                    <Text style={{ fontSize: 20, fontWeight: 600, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        {(data.members).toLocaleString()}
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: 500, paddingBottom: 0, color: 'rgba(255, 255, 255, 1)' }}>
                        Popularity #{data.popularity}
                    </Text>
                    
                </View>

            </View>
            <View
                style={{
                    paddingVertical: 5,
                    borderBottomWidth: 1,
                    paddingHorizontal: 25,
                    marginBottom: 10,
                    borderRadius: 30,

                }}
            >
                <Text style={{ fontSize: 18, fontWeight: 600, paddingBottom: 0, color: 'rgba(0, 0, 0, 1)' }}>
                    {data.title}
                </Text>
                {data.title_english !== null ?(
                    <Text style={{ fontSize: 16, fontWeight: 600, paddingBottom: 5, color: 'rgba(0, 0, 0, 0.6)' }}>
                    {data.title_english}
                </Text>
                ) : null}
                <Text style={{ fontSize: 15, fontWeight: 500, paddingTop: 3, color: 'rgba(0, 0, 0, 1)', alignSelf:'flex-end' }}>
                    {allAuthors.join('; ')}
                </Text>
                
            </View>

            <ScrollView
                horizontal={false}
                showsVerticalScrollIndicator={false}
                style={{
                    paddingHorizontal: 20
                }}
            >

                <Text style={{ fontSize: 20, fontWeight: 600, borderBottomWidth: 0.3, marginBottom: 10 }}> Information </Text>
                <View style={{ flexDirection: 'row', marginBottom: 20}} >
                    <View style={{ flexDirection: 'colums', paddingRight:10 }}>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Status </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Published  </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Chapters </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Volumes </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Genres   </Text>
                        <Text style={{ fontSize: 14, fontWeight: 500, marginBottom: 5 }}> Themes  </Text>
                    </View>
                    <View style={{ flexDirection: 'colums' }}>
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {data.status} </Text>
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {data.published.string}  </Text>
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {data.chapters} </Text>
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {data.volumes} </Text> 
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {allGenres.join(', ')}   </Text>
                        <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}> {allThemes.join(', ')}  </Text>
                    </View>

                </View>

                <Text style={{ fontSize: 20, fontWeight: 600, borderBottomWidth: 0.3, marginBottom: 10 }}> Synopsis </Text>
                <Text style={{ fontSize: 14, fontWeight: 400, marginBottom: 5 }}>{data.synopsis} </Text>

                {/* Other text components */}

            </ScrollView>

        </View>
    );
}

