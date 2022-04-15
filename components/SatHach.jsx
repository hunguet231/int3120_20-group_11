import { View, Text, Button, Image, ScrollView, StyleSheet, Animated, Alert,TouchableOpacity,TouchableRipple, TouchableHighlight} from "react-native";
import { options } from "../utils/sathachOptions";
import * as React from 'react';

const content = 'Hãy làm nhiều đề sát hạch bên dưới để đánh giá khả năng luyên thi của bạn'



const SatHach = ({navigation}) => {
    return (
        <View style={{backgroundColor: 'white'}} >
            <View style={styles.header}>
                <Text style={styles.headerContent}>{content}</Text>
            </View>
            <ScrollView style={{height: 580}}>
                <View style={styles.main}>
                    
                    {options.map((opt, index) => (
                        <TouchableOpacity key={index} style={styles.button1} 
                        onPress={()=>{
                            navigation.navigate('Câu hỏi');
                        }}>
                           
                            <View style={styles.button}>
                                <View style = {styles.container1}>
                                    <View style = {styles.containerBox1}>
                                        <Text style = {styles.containerBox1Content}>{opt.name}</Text>
                                    </View>
                                </View>
                                <Text style = {styles.process}>{opt.done}/{opt.total}</Text>
                                <View style = {styles.processBar}>
						        <View style = {styles.goal}></View>
                                <View style = {[styles.current, {width: opt.done*styles.goal.width/opt.total}]}></View>
					        </View>
                            </View>
                        </TouchableOpacity>
                    ))}
                    

                </View>
            </ScrollView>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerBtn}>
                    <View>
                        <Text style={styles.footerBtnText}>Chọn đề ngẫu nhiên</Text>
                    </View>
                </TouchableOpacity>
            </View>
            
        </View>
    );
  }
  
  const styles = StyleSheet.create({
    header: {
        backgroundColor: '#fff',
        borderBottomWidth: 2,
        height: 75,
        padding: 15,
    },
    headerContent: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 15,
        fontWeight: 'normal',
        color: '#000000',
        lineHeight: 15,
    },
    main: {
      paddingLeft: 15,
      paddingRight: 15,
      paddingTop: 10,
      backgroundColor: '#fff',
      flexDirection: 'column',
      
    },
    button: {
        backgroundColor: "#fff",
        borderColor: "rgba(0, 0, 0, 0.15)",
        borderStyle: "solid",
        borderWidth: 1,
        //padding: 15,
        width: 360,
        height: 50,
        borderRadius: 8,
        shadowColor: "black",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.25,
        shadowRadius: 7,
        elevation: 5,
        
    },
    
    button1: {
        width: 360,
        height: 50,
        shadowRadius: 24,
        borderRadius: 8,
        marginBottom: 10, 
        marginTop: 10,
    },
    container1: {
        width: 70,
        height: 50,
        position: "absolute",
    },
    containerBox1: {
        width: 70,
        height: 48,
        backgroundColor: "rgb(239, 239, 239)",
        position: "relative",
        borderTopLeftRadius: 7,
        borderBottomLeftRadius: 7,
    },
    containerBox1Content: {
        width: 50,
        height: 26,
        position: "absolute",
        transform: [
            {translateX: 12},
            {translateY: 12},
        ],
        color: "rgb(0, 0, 0)",
        fontSize: 13,
        fontWeight: "400",
        lineHeight: 24,
        fontFamily: "Roboto",
        letterSpacing: 0,
        textAlign: "left",
    },
    process: {
        width: 80,
        height: 26,
        position: "absolute",
        transform: [
            {translateX: 74.7755},
            {translateY: 12},
        ],
        color: "rgb(0, 0, 0)",
        fontSize: 16,
        fontWeight: "700",
        lineHeight: 24,
        fontFamily: "Roboto",
        letterSpacing: 0,
        textAlign: "center",
    },
    processBar: {
        width: 150,
        height: 13,
        position: "absolute",
        left: 165,
        top: 20,
    },
    goal: {
        width: 150,
        height: 13,
        backgroundColor: "rgb(217, 230, 234)",
        position: "absolute",
        borderRadius: 10,
        },
    current: {
        height: 13,
        backgroundColor: "rgb(128, 128, 128)",
        position: "absolute",
        transform: [
            {translateX: 1},
        ],
        borderRadius: 10,
    },
    footer: {
        paddingBottom: 10,
        paddingTop: 0,
        alignItems: "center",
    },
    footerBtn: {
        backgroundColor: '#1890FF',
        width: 280,
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },
    footerBtnText: {
        fontFamily: 'Roboto',
        fontSize: 16,
        fontWeight: 'normal',
        color: '#FFFFFF'
    }

  });

export default SatHach