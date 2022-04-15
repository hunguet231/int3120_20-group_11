import { View, Text, Button, Image, ScrollView, StyleSheet, Animated, Alert,TouchableOpacity,TouchableRipple, TouchableHighlight} from "react-native";
import * as React from 'react';

const ChonCauHoi = () => {
    return (
        <View>
            <View style={styles.header}>
                <TouchableOpacity style={styles.headerBtn}>
                    <View>
                        <Text style={styles.headerText}>Câu 1/25</Text>
                        <Image source= {require('../assets/triangleDown.png')} style={styles.headerImg} />
                    </View>
                </TouchableOpacity>
                <View style={styles.body}>
                    <View style={styles.questionBox}>
                        <Text style={styles.index}>1</Text>
                    </View>
                    <View style={styles.questionBox}>
                        <Text>2</Text>
                    </View>
                    <View style={styles.questionBox}>
                        <Text>3</Text>
                    </View>
                    <View style={styles.questionBox}>
                        <Text>4</Text>
                    </View>
                    <View style={styles.questionBox}>
                        <Text>5</Text>
                    </View>

                    

                    
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
        display: 'flex',
        width: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        flexGrow: 5,
        alignContent: 'space-around',
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 20,
    },
    questionBox: {
        width: 50,
        height: 50,
        borderRadius: 50,
        backgroundColor: '#E4E4E4',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 10,
        
    },
    index: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
})


export default ChonCauHoi;