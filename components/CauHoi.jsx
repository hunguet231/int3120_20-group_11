import { View, Text, Button, Image, ScrollView, StyleSheet, Animated, Alert,TouchableOpacity, TouchableHighlight} from "react-native";
import React, { useEffect, useState } from "react";
import { RadioButton, TouchableRipple } from 'react-native-paper';
import {AppConstant} from '../constants'
import { API } from "aws-amplify";
import { listQuestions } from '../src/graphql/queries';

const CauHoi = ({ route, navigation }) => {
    //Lay id parameter da truyen vao tu truoc
    const param = route.params.id;

    const [id, setId] = React.useState(param);
    const [index, setIndex] = React.useState(1);
    const [questions, setQuestions] = React.useState([]);
    const [isLoading, setLoading] = useState(true);
    const [value, setValue] = React.useState('');
    const [isChosen, setChosen] = React.useState(false);

    const handleChange = (value) => {
        setValue(value);
    }
    
    useEffect(async () => {
        setId(param)
        console.log(id);
        await fetchQuestions(param);
    }, []);

    const fetchQuestions = async (id) => {
        try {
            setLoading(true);
            // Switch authMode to API_KEY for public access
            const { data } = await API.graphql({
                query: `query {
                  getSet(id: ${id}) {
                    id
                    time_left
                    chosen_number
                    total
                    chosen {
                      id
                      question_id
                      content
                      is_true
                      createdAt
                      updatedAt
                    }
                    type
                    questions {
                      items {
                        id
                        set_id
                        content
                        image
                        createdAt
                        updatedAt
                      }
                      nextToken
                    }
                    createdAt
                    updatedAt
                  }
                }`,
                authMode: "API_KEY"
          });
          const res = data.getSet.questions.items;
          setQuestions(res);
          console.log(res);
          setLoading(false);
        } catch (err) {
          console.log(err);
        }
    };



    return (
        <View style = {styles.body}>
            <View style={styles.header}>
                <View style={styles.clock}>
                    <Image source= {require('../assets/clock.png')} style={styles.image} />
                    <Text style={styles.clockTime}>18 : 54</Text>
                </View>
                
                <Text style={styles.headerText}>Câu số {index}/25</Text>
                <TouchableHighlight style={styles.endBtn}>
                    {index === 25 ? <Text style={styles.endBtnText}>Kết thúc</Text> : <Text style={styles.endBtnText}>Câu sau</Text>}
                    
                </TouchableHighlight>
            </View>

            <View style = {styles.questionView}>
                <Text style={styles.question}>Phần của đường bộ được sử dụng cho các phương tiện giao thông qua lại là gì?</Text>
            </View>

            <View style = {styles.answerView}>
                <RadioButton.Group style={styles.radioGroup} onValueChange={newValue => setValue(newValue)} value={value}>
                                   
                    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" 
                     onPress={() => handleChange('first')}>
                        <View style = {styles.answer}>
                            <Text style = {styles.answerIndex}>1</Text>
                            <Text style = {value.includes('first') ? styles.answerTextCheck : styles.answerText}>Phần mặt đường và lề đường.</Text>
                            <RadioButton color={AppConstant.DEFAULT_APP_COLOR} value="first" 
                            style={styles.radio}/>
                        </View>
                    </TouchableRipple>
              
               
                    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)"   onPress={() => handleChange('second')}>
                        <View style = {styles.answer}>
                            <Text style = {styles.answerIndex}>2</Text>
                            <Text style = {value.includes('second') ? styles.answerTextCheck : styles.answerText}>Phần đường xe chạy.</Text>
                            <RadioButton color={AppConstant.DEFAULT_APP_COLOR} value="second" style={styles.radio}/>
                        </View>
                    </TouchableRipple>
           
               
                    <TouchableRipple rippleColor="rgba(0, 0, 0, .32)" onPress={() => handleChange('third')}>
                        <View style = {styles.answer}>
                            <Text style = {styles.answerIndex}>3</Text>
                            <Text style = {value.includes('third') ? styles.answerTextCheck : styles.answerText}>Phần đường xe cơ giới.</Text>
                            <RadioButton color={AppConstant.DEFAULT_APP_COLOR} value="third" style={styles.radio}/>
                        </View>
                    </TouchableRipple>

                </RadioButton.Group>
            </View>

            <View style={styles.footer}>
                <TouchableOpacity style={styles.footerBtn}
                onPress={()=>{
                    navigation.navigate('Chọn câu hỏi');
                }}>
                    <View>
                        <Image source= {require('../assets/triangle.png')} style={styles.footerImage} />
                        <Text style={styles.footerText}>Câu {index}/25</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = {
    
    body: {
        height: '100%',
        width: '100%',
    },
    header: {
        height: 50,
        width: '100%',
        backgroundColor:'#E4E4E4',
        display: 'flex'
    },
    clock: {
        position: 'absolute',
        height: 24,
        width: 80,
        top: 13,
        left: 15,
        verticalAlign: 'middle',
        marginTop: 'auto',
        marginBottom: 'auto',
       
    },
    image: {
        width: 24,
        height: 24,
        position: 'absolute',
    },
    clockTime: {
        position: 'absolute',
        marginLeft: 27,
        lineHeight: 24
    },
    headerText: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 90,
        lineHeight: 24,
        textAlign: 'center',
        fontSize: 14,
    },
    endBtn: {
        position: 'absolute',
        top: 13,
        right: 15,
        backgroundColor: '#B4B4B4',
        borderRadius: 6,
        width: 80,
        height:24,
        alignItems: 'center',

    },
    endBtnText: {
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    questionView: {
        width: '100%',
        height: 80,
        borderBottomWidth: 2,
        borderColor: 'black',
        padding: 15,
        alignItems: 'center',
    },
    question: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        fontWeight: 'bold',
        lineHeight: 18,
        marginTop: 'auto',
        marginBottom: 'auto',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    answerView: {

    },
    answer: {
        height: 50,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: 'black',
        flexDirection: 'row',
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'space-between',
    },
    answerIndex: {
        height: 20,
        width: 20,
        marginLeft: 20,
        backgroundColor: '#E4E4E4',
        textAlign: 'center',
        borderRadius: 50
    },
    answerText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        alignItems: 'center',
        marginLeft: 55,
        marginRight: 45,
        marginTop: 16,
        position: 'absolute',
        color: 'black'
    },
    answerTextCheck: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 18,
        alignItems: 'center',
        marginLeft: 55,
        marginRight: 45,
        marginTop: 16,
        position: 'absolute',
        color: 'green'
    },
    radio: {
      flex: 1,
      
    },
    footer: {
        bottom: 0, 
        height: 60,
        width: '100%', 
        backgroundColor: AppConstant.DEFAULT_APP_COLOR,
        position: 'absolute',
        alignItems: 'center',
        
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
    },
    footerBtn: {
        height: '100%',
        width: '100%', 
    },
    footerImage: {
        height: 10,
        width: 15,
        alignItems: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 5,
        marginBottom: 15,
    },
    footerText: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontSize: 14,
        lineHeight: 15,
        color: '#FFF',
        alignItems: 'center',
        textAlign: 'center',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
    }
}

export default CauHoi