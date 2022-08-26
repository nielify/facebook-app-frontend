import { StyleSheet } from "react-native";
import colors from '../utils/colors';

export const globalStyles = StyleSheet.create({
  /* LoginScreen */
  radialGradient: {
    width:'100%',
    height:'100%',
  },
  container: {
    flex: 1,
    backgroundColor: colors.blue1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  loginLogo: {
    marginVertical: 50,
    width: 170,
    height: 35,
    resizeMode: 'contain',
  },
  loginContainer: {
    alignItems: 'center',
  },
  inputContainer: {
    borderRadius: 3,
    width: 320,
    height: 40,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    margin: 5,
  },
  button: {
    borderRadius: 3,
    width: 320,
    backgroundColor: colors.blue2,
    paddingVertical: 9,
    marginTop: 11,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  signup: {
    color: colors.white,
    borderBottomColor: colors.white,
    borderBottomWidth: .8,
    fontSize: 13,
  },
  help: {
    color: colors.white,
    backgroundColor: colors.blue3,
    fontSize: 17,
    textAlign: 'center',
    width: 23,
    borderRadius: 3,
    marginTop: 20,
    marginBottom: 15,
    alignSelf: 'center'
  },
  /* HomeScreen */
  homeContainer: {
    marginHorizontal: 10,
  },
  homeLogo: {
    width: 130,
    height: 40,
    resizeMode: 'contain',
  },
  homeHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  userContainer: {
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePictures: {
    width: 40,
    height: 40,
    borderRadius: 50 / 2,
    marginRight: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  /* ProfileScreen */
  profileContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginTop: 10,
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePicture: {
    borderRadius: 120 / 2,
    width: 70,
    height: 70,
  },
  profileName: {
    marginLeft: 20,
    fontSize: 25,
    fontWeight: 'bold',
  },
  profileDetailsContainer: {
    marginVertical: 12,
    marginHorizontal: 5,
  },
  profileDetails: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});