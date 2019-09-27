import { StyleSheet } from 'react-native'; 
import { COLORS } from '../../assets';

export default styles = StyleSheet.create({
  main: { 
    flex: 1, 
    justifyContent: 'space-between', 
    marginHorizontal: 20 
  },
  header: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginVertical: 20
  },
  profileContainer: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: COLORS.WHITE
  },
  detailsContainer: {
    flex: 1, 
    flexDirection: 'column', 
    justifyContent: 'space-between', 
    alignItems: 'flex-start', 
    marginLeft: 20
  },
  name: {
    fontWeight: 'bold', 
    fontSize: 20
  },
  bio: {
    color: COLORS.GRAY, 
    fontWeight: '500'
  },
  follow: {
    width: 80, 
    height: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: COLORS.FOLLOW_COLOR,
    borderRadius: 20
  },
  followText: {
    color: '#FFF'
  },
  sent: {
    width: 50, 
    height: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: COLORS.SEND_MESSAGE_COLOR,
    marginLeft: 10, 
    borderRadius: 20
  },
  infoProfile: { 
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 20 
  },
  content: {
    flexDirection: 'column', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  count: {
    fontWeight: '500', 
    fontSize: 18
  },
  title: {
    color: COLORS.GRAY, 
    fontWeight: '500'
  },
  mansonryContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 0,
    marginRight: 0,
  },
  profileImage: {
    borderColor: COLORS.WHITE,
    borderRadius: 55,
    borderWidth: 1,
    height: 90,
    width: 90,
  },
  sceneContainer: {
    marginTop: 20,
  },
  bottomTab: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginVertical: 20
  }
});