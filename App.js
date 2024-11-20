import React from 'react';
import {View, Text, StyleSheet, SectionList, Button, TouchableOpacity, StatusBar, ScrollView} from "react-native";
import Font from "react-native-vector-icons/FontAwesome6";
import {Image} from 'react-native';

const database = [
    {data: [
            {name: "Goldeen", image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_118-2x.png'},

            {name: "Horsea", image:'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_116-2x.png'},
        ],
        title: "Water Pokemon", bgColor: "skyblue"},

    {data: [
            {name:"Caterpie",
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_10-2x.png'},

            {name:"Vileplume",
                image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_45-2x.png'},
        ],
        title:"Grass Pokemon", bgColor: "lightgreen"},
];

const styles = StyleSheet.create({
    headerText: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 0,
        marginRight: 0,
        textAlign: 'center',
        fontSize:15,
        padding: 10
    },

    sections: {
        flex: 1,
        padding: 10,
        flexDirection: 'column',
        backgroundColor:"beige",
        borderWidth: 2,
        marginTop: 15,
        marginLeft: 15,
        marginRight: 15
    },


    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 10,
        borderBottomWidth: 1,
    },

    name: {
        fontSize: 25,
        flex: 1,
        fontWeight: "bold"
    },

    image: {
        width:220,
        height:300,
        resizeMode: "contain",
    }
})

const renderItem = ({item}) => {
    return (
        <TouchableOpacity>
            <View style={styles.item}>
                <Text style={styles.name}>{item.name}</Text>
                <Image source={{uri: item.image}} style={styles.image} />
            </View>
        </TouchableOpacity>
    )
}


const App = () => {
    return (
        <View style={{flex:1, marginTop: 50, marginBottom: 50}}>
            <StatusBar hidden={true}/>
            <View style={{alignItems:"center", marginBottom:10}}>
                <Button title="Add Pokemon" />
            </View>
            <View style={[styles.sections]}>
                <SectionList sections={database}
                             renderItem={renderItem}
                             renderSectionHeader={({section:{title, bgColor}}) => (
                                 <View style={[styles.sections]}>
                                     <Text style={[styles.headerText, {backgroundColor: bgColor}]}>{title}
                                     </Text>
                                 </View>
                             )}
                />
            </View>
        </View>
    );
};

export default App;
