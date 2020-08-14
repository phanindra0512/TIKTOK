import React from 'react'
import { View, Text ,StatusBar} from 'react-native'
import Feather from 'react-native-vector-icons/Feather';
import {Button,Searchbar,Avatar} from 'react-native-paper';
import Users from './Users';

function search() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    return (
        <View style={{ flex: 1,  }}>
        <StatusBar translucent barStyle="light-content-content" backgroundColor="black" />
        <View style={{flex:0.1,flexDirection:'row',paddingTop:35}}>
<View style={{flex:0.5,alignSelf:'center'}}>
<Feather name="chevron-left" size={25} style={{alignSelf:'flex-start',paddingLeft:20}} />

</View>
<View style={{flex:2,alignSelf:'center'}}>
{/* <Text style={{fontSize: 16, fontWeight: 'bold',alignSelf:'center'}}>Kandula Narendra Reddy</Text> */}
<Searchbar
        placeholder="Search..."
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{alignItems:'center',height:45,justifyContent:'center',width:220}}
        inputStyle={{alignItems:'center',justifyContent:'center'}}
      />
</View>
<View style={{flex:1,alignSelf:'center'}}>
    <Button labelStyle={{color:'#ff4d4d'}} >Search</Button>
</View>

            </View>
            <View style={{flex:0.1,flexDirection:'row',justifyContent:'center',marginTop:10}}>
<View style={{flex:1}}>
<Text style={{fontSize: 16, fontWeight: 'bold',alignSelf:'center'}}>USERS</Text>
<View style={{borderColor:'black',borderWidth:2,width:100,alignSelf:'center',marginTop:20}} />

</View>
<View style={{flex:1}}>
<Text style={{fontSize: 16, fontWeight: 'bold',alignSelf:'center',color:'#ccc'}}>SOUNDS</Text>
</View>
<View style={{flex:1}}>
<Text style={{fontSize: 16, fontWeight: 'bold',alignSelf:'center',color:'#ccc'}}>HASHTAGS</Text>
</View>
            </View>
            {/* <View style={{flex:0.12,flexDirection:'row',alignItems:'center',paddingLeft:10,paddingRight:10}}>
<View style={{flex:0.6}}>
<Avatar.Image size={70} source={require('../../assests/tiktok.png')} />

</View>
<View style={{flex:1}}>
    <View style={{flex:1}}>
    <Text style={{fontSize: 16, fontWeight: 'bold',color:'#3973ac'}}>Telugu</Text>

    </View>
<View style={{flexDirection:'row',flex:1}}>
    <View style={{flex:1.5}}>
    <Text style={{color:'#3973ac'}}>@telugu,</Text>

    </View>
<View style={{flex:2}}>
<Text style={{color:'#bfbfbf'}}>85.5k fans....</Text>

</View>
</View>
<View style={{flex:1}}>
<Text style={{color:'#bfbfbf'}}>No bio yet</Text>
</View>
</View>
<View style={{flex:0.7,alignItems:'center',justifyContent:'center'}}>
    <Button mode='contained' style={{backgroundColor:'#FF444F',}}>Follow</Button>
</View>
            </View> */}
            <Users/>
        </View>
    )
}

export default search
