import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {backgroundColor: '#7DB9B6', flex: 1, paddingTop: 20},
  inputContainer: {padding: 5, marginTop: 2},
  labelContainer: { flexDirection: 'row', justifyContent: 'space-between', padding: 5, alignItems: 'center'},
  inputLabel: {color:'#4D455D', fontWeight: 'bold', fontSize: 18},
  yupMessage: {color:'#E96479', fontSize: 15},
  inputInnerContiner: {flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor:'#FCFFE7', paddingRight: 5, paddingLeft:5, borderRadius: 5},
  input: {flex:1, color: '#4D455D'},
  buttonContainer:{justifyContent:'center', alignItems: 'center', margin: 20, backgroundColor: '#FCFFE7', borderRadius:10},
  buttonText:{padding: 10, color: '#4D455D', fontWeight: 'bold', fontSize: 20}
});

export {styles};
