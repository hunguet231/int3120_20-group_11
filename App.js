import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native';
import AppBar from './components/common/AppBar';
import OptionBox from './components/home/OptionBox';
import { options } from './utils/options';
import { AppConstant } from './constants';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={styles.statusBar}>
      </SafeAreaView>
      <AppBar title={`Ôn thi giấy phép lái xe máy`} />
      <ScrollView>
        <View style={styles.main}>
          {options.map((opt, index) => (
            <OptionBox key={index} imageUrl={opt.image} textButton={opt.text} />
            ))}
        </View>
      </ScrollView>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
  },
  main: {
    paddingBottom: 50,
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    flexWrap: 'wrap',
  }
});
