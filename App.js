import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, SectionList, Button, Image} from 'react-native';

const styles = StyleSheet.create({
  opacityStyle: {
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
      backgroundColor: '#F6F6F6',
  },
  textStyle: {
    fontSize: 15,
    margin: 10,
    textAlign: 'center',
    maxWidth: 90,
    flex: 1
  },
  headerText: {
    fontSize: 20,
    margin: 10,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  button: {
    borderWidth: 1,
    margin: 10,
  }
});

const datasource = [
  {data:[
      {key: 'The Crow', image: require('./img/crow.png')},
      {key: 'The Fox', image: require('./img/fox.png')},
    ],
    title: "The Other One", bgcolor: "khaki"},
  {data:[
      {key: 'Loose Fish', image: require('./img/fish.png')},
      {key: 'The Robot', image: require('./img/robot.png')},
    ],
    title:"Little Mischief", bgcolor: "darkseagreen"},
  {data:[
      {key: 'Prison', image: require('./img/prison.png')},
      {key: 'Unspoken', image: require('./img/unspoken.png')},
    ],
    title: "Mime", bgcolor: "skyblue"},
    {data:[
            {key: 'The Rose', image: require('./img/rose.png')},
            {key: 'The Little Prince', image: require('./img/prince.png')},
    ],
    title: "The Little Prince", bgcolor: "lightcoral"}
];


const renderItem = ({item}) => {
  return (
      <TouchableOpacity style={styles.opacityStyle}>
        <Text style={styles.textStyle}>{item.key}</Text>
        <Image style={{height: 350, paddingTop: 5, marginBottom: 5, flex: 1}}
               source={item.image}/>
      </TouchableOpacity>
  );
};

const App = () => {
  return (
      <View style={{marginTop: 30,}}>
        <SectionList
            contentContainerStyle={{padding: 10}}
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={({section:{title, bgcolor}})=>(
                <Text style={[styles.headerText, {backgroundColor: bgcolor}]}>{title}</Text>
            )}/>
      </View>
  );
};

export default App;