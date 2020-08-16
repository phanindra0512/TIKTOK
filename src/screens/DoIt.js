import React from 'react'
import { View, Text, StatusBar, Image, ScrollView } from 'react-native'
import { BaseRouter } from '@react-navigation/native'
import { Title } from 'react-native-paper'
import Ionicons from 'react-native-vector-icons/Ionicons';

function DoIt({ route }) {
    return (
        <View style={{ flex: 1, }}>
            <StatusBar translucent barStyle="dark-content" backgroundColor="transparent" />
            <View style={{ flex: 0.8, flexDirection: 'row', backgroundColor: '#fff' }}>
                <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={{ uri: route.params.img }} style={{ width: 110, height: 150 }} />
                </View>
                <View style={{ flex: 0.7, justifyContent: 'center' }}>
                    <Title style={{ fontSize: 18, paddingHorizontal: 5, lineHeight: 20 }}>{route.params.desc}</Title>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#ccc' }}>{route.params.title}</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{route.params.likes} videos</Text>
                </View>
            </View>
            <View style={{ flex: 1.5, }}>
                <ScrollView >
                    <View style={{ flex: 0.5, flexDirection: 'row', }}>
                        <Image source={{ uri: 'https://wallpapercave.com/wp/wp4946988.jpg' }} style={{ flex: 1, marginHorizontal: 2, width: 110, height: 150 }} />
                        <Image source={{ uri: 'https://english.cdn.zeenews.com/sites/default/files/2020/06/25/868717-siya-kakkar.jpg' }} style={{ flex: 1 }} />
                        <Image source={{ uri: 'https://static.toiimg.com/thumb/msid-74971889,imgsize-541002,width-800,height-600,resizemode-75/74971889.jpg' }} style={{ flex: 1, marginHorizontal: 2 }} />
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT1MdzmUHTI7CCtsdNJAQoT71j1JrzlpCJ_9w&usqp=CAU' }} style={{ flex: 1, marginHorizontal: 2, width: 110, height: 150 }} />
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQccinyUSwDZrUbuIEzonEqo2MYQ9jhNi-Z4Q&usqp=CAU' }} style={{ flex: 1 }} />
                        <Image source={{ uri: 'https://i2.wp.com/wikifamouspeople.com/wp-content/uploads/2019/08/kristen-ravali.jpg?resize=1060%2C697&ssl=1' }} style={{ flex: 1, marginHorizontal: 2 }} />
                    </View>
                    <View style={{ flex: 0.5, flexDirection: 'row', }}>
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkOYz3beVkdgSYJZi5bh239GF1mfkbjuqWfg&usqp=CAU' }} style={{ flex: 1, marginHorizontal: 2, width: 110, height: 150 }} />
                        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSi0-_5pMr_gHcJZdLnrjzoUQWnqsXXBnbNWw&usqp=CAU' }} style={{ flex: 1 }} />
                        <Image source={{ uri: 'https://i.pinimg.com/564x/e6/83/a2/e683a2e87489a95bdbe1b460ec633076.jpg' }} style={{ flex: 1, marginHorizontal: 2 }} />
                    </View>
                </ScrollView>
            </View>
            <View style={{ alignSelf: 'center', position: 'absolute', bottom: 20, backgroundColor: 'red', borderRadius: 50, elevation: 10 }}>
                <Ionicons name="ios-videocam" color="#fff" size={35} style={{ padding: 10 }} />
            </View>
        </View>
    )
}

export default DoIt
