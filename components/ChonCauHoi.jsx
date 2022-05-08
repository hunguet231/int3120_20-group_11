import { View, Text, Button, Image, ScrollView, StyleSheet, Animated, Alert,TouchableOpacity,TouchableRipple, TouchableHighlight} from "react-native";
import * as React from 'react';

const ChonCauHoi = ({navigation}) => {
    var doneQuestion = [1];
    let curentIndex = 1;
    var questionIndexs = [];
    let defaultColor = '#E4E4E4'

    for (let i = 1; i <= 25; i++) {
        defaultColor = '#E4E4E4'
        if(doneQuestion.includes(i)) defaultColor = '#7092FE';
        questionIndexs.push(
            <View key={i} style={[styles.questionBox, {backgroundColor: defaultColor,}]} >
                <Text style={styles.index}>{i}</Text>
            </View>
        );
    }

    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn}
                onPress={()=>{
                    navigation.goBack();
                  }}>
                    <View>
                        <Text style={styles.headerText}>Câu {curentIndex}/25</Text>
                        <Image source= {require('../assets/triangleDown.png')} style={styles.headerImg} />
                    </View>
                </TouchableOpacity>
                <View style={styles.body}>
                    {questionIndexs}
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    header: {
        height: 60,
        width: '100%', 
        backgroundColor: '#1890FF',
        alignItems: 'center',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
    },
    headerBtn: {
        height: '100%',
        width: '100%', 
    },
    headerImg: {
        height: 10,
        width: 15,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 10,
    },
    headerText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 15,
        color: '#FFF',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 20,
        marginBottom: 'auto',
    },
    body: {
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 5,
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
        width: 400,
        flexDirection: 'row',
    },
    questionBox: {
        width: 60,
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 5,
        marginRight: 5,
        
    },
    index: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})


export default ChonCauHoi;