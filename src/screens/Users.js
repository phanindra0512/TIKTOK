import React from 'react'
import { View, Text ,ScrollView} from 'react-native'
import {Button,Searchbar,Avatar} from 'react-native-paper';

const usersListData=[
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/logo.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/logo.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    },
    {
        img: require('../../assests/tiktok.jpg'),
        title:'Telugu',
        subTitle:'@telugu',
        fans:'85.5k fans...',
        description:'No bio yet'
    }
]

function Users() {
    return (
        <View style={{flex:1}}>
            <ScrollView style={{flex:1}}>
            {
                                usersListData.map((Item, index) => {
                                    return (
                                        <View style={{flex:0.12,flexDirection:'row',alignItems:'center',paddingLeft:10,paddingRight:10,marginTop:10,marginBottom:10}} key={index}>
                                        <View style={{flex:0.6}}>
                                        <Avatar.Image size={70} source={Item.img} />
                                        
                                        </View>
                                        <View style={{flex:1}}>
                                            <View style={{flex:1}}>
                                    <Text style={{fontSize: 16, fontWeight: 'bold',color:'#3973ac'}}>{Item.title}</Text>
                                        
                                            </View>
                                        <View style={{flexDirection:'row',flex:1}}>
                                            <View style={{flex:1.5}}>
                                    <Text style={{color:'#3973ac'}}>{Item.subTitle},</Text>
                                        
                                            </View>
                                        <View style={{flex:2}}>
                                    <Text style={{color:'#bfbfbf'}}>{Item.fans}</Text>
                                        
                                        </View>
                                        </View>
                                        <View style={{flex:1}}>
                                    <Text style={{color:'#bfbfbf'}}>{Item.description}</Text>
                                        </View>
                                        </View>
                                        <View style={{flex:0.7,alignItems:'center',justifyContent:'center'}}>
                                            <Button mode='contained' style={{backgroundColor:'#FF444F',}}>Follow</Button>
                                        </View>
                                                    </View>

                                    )
                                })
                            }
            </ScrollView>
        </View>
       
    )
}

export default Users
