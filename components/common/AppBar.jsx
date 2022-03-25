import { StyleSheet, Text, View } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AppConstant } from '../../constants';

const AppBar = ({title, icon = "three-bars"}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Octicons style={styles.icon} name={icon} size={26} color="white" />
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppConstant.DEFAULT_APP_COLOR,
    paddingTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 10,
  },
  content: {
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    left: 0,
  },  
  title: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 16,
  },
});

export default AppBar
