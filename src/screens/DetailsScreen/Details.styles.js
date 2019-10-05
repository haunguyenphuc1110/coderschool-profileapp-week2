import { StyleSheet } from 'react-native';
import { COLORS } from'../../assets';

const shadow = {
  shadowColor: COLORS.BLACK,
  shadowOffset: {
    width: 0,
    height: 4
  },
  shadowOpacity: 0.32,
  shadowRadius: 5.46,
  elevation: 9
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageBackground: {
    flex: 1, 
    width: '100%', 
    height: '100%', 
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40, 
    overflow: 'hidden'
  },
  headerContainer: {
    flex: 0.6
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between',
    marginTop: 30,
    marginBottom: 10,
    marginHorizontal: 20
  },
  imageHeader: {
    flex: 1, 
    width: null, 
    height: 40
  },
  contentContainer: {
    flex: 0.4, 
    justifyContent: 'space-around', 
    marginHorizontal: 20
  },
  placeContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  placeInfo: {
    justifyContent: 'space-between'
  },
  placeName: {
    fontSize: 26, 
    fontWeight: 'bold'
  },
  locationContainer: {
    flexDirection: 'row'
  },  
  marker: {
    marginTop: 2, 
    marginRight: 10
  },
  location: {
    fontWeight: '500',
    color: COLORS.GRAY
  },
  button: { 
    width: 60, 
    height: 60, 
    backgroundColor: COLORS.FOLLOW_COLOR, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 23, 
    borderTopLeftRadius: 0,
    ...shadow
  },
  info: {
    fontWeight: '500'
  },
  tagWrapper: {
    width: '50%', 
    flexDirection: 'row', 
    justifyContent: 'space-around'
  },  
  tag: {
    color: COLORS.GRAY,
    fontWeight: '500'
  },
  iconContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
  subIcon: {
    flexDirection: 'row', 
    width: '25%', 
    justifyContent: 'space-between'
  }
});

export default styles;