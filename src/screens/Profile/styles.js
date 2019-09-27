import { Dimensions } from 'react-native'

export default styles = {
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
    backgroundColor: '#FFF'
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
    color: 'gray', 
    fontWeight: '500'
  },
  follow: {
    width: 80, 
    height: 25, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#4771f6',
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
    backgroundColor: '#78d5fa',
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
    color: 'gray', 
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
    borderColor: '#FFF',
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
}