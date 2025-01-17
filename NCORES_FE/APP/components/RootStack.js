import React, {useEffect,useState} from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { actionCreators as cosmeticActions } from '../redux/modules/cosmetics'
import { HeaderBackButton } from '@react-navigation/stack';
import SignInScreen from './SignInScreen';
import GetEmail from './SignUp/GetEmail';
import GetPassword from './SignUp/GetPassword';
import GetNickName from './SignUp/GetNickName';
import GetFinish from './SignUp/GetFinish';
import GetGender from './SignUp/GetGender';

import GetAge from './SignUp/GetAge';
import GetIndicate from './SignUp/GetIndicate';
import GetWorry from './SignUp/GetWorry';
import UploadScreen from './UploadScreen';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreators as signActions } from '../redux/modules/sign';
import { TouchableOpacity,Text,View, Image, Button, Pressable } from 'react-native';
import CameraPage from './CameraPage';
import AsyncStorage from '@react-native-community/async-storage';
import MainTab from './Tab/MainTab';
import MyLogOut from './MyPage/MyLogOut';
import CameraInfo from './Camera/CameraInfo';
import CameraConcern from './Camera/CameraConcern';
import CameraIndicate from './Camera/CameraIndicate';
import CameraCheck from './Camera/CameraCheck';
import CameraRating from './Camera/CameraRating';
import MainReport from './Report/MainReport';
import HairCheck from './Skin/HairCheck';
import SkinReport from './Skin/SkinReport';
import ShopList from './Report/ShopList';
import Icon from 'react-native-vector-icons/EvilIcons'
import BlueTooth from './BlueTooth';
import GetHead from './SignUp/GetHead';
import ElementList from './Report/ElementList';
import XAxisExample from './XAxisExample';
import GetOut from './MyPage/GetOut';
import Thank from './MyPage/Thank';
import MyElementList from './Report/MyElementList';
import CameraLottie from './CameraLottie';
import CameraLoading from './CameraLottie';
import ErrorUploadScreen from './ErrorUploadScreen';
import MainPage from './MainPage';


// const get = async () => {
//     return await AsyncStorage.getItem('token')
// }
function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../image/Left.png')}
      />
    );
  }
const RootStack = ({ navigation }) => {

    const dispatch = useDispatch();
    const isLogin = useSelector(state => state.sign.checkLogin)

   

    useEffect(()=>{
        dispatch(signActions.checkLoginMD())
     }, [])
    
     useEffect(()=>{
         async function load() {
             try {
                 const raw = await AsyncStorage.getItem('token')
                 console.log(raw)
                 setLogin(raw)    
                 console.log("Root")
             } catch (e) {
                 console.log(e)
            }
         }
         load()
     }, [isLogin])
     const [login,setLogin] = useState()
  
     const Stack = createNativeStackNavigator();
     
     return (
         <Stack.Navigator 

         >
             {
           login?  
           <>
               <Stack.Screen
               name="MainPage"
               component={MainTab}
                             options={{ headerShown: false }}
                           
                         /> 
                          <Stack.Screen
                         name="GetHead"
                         component={GetHead}
                         options={{headerShown: false}}
                     />     
                </>          
                      
                    
                     :
               <>
                      <Stack.Screen
           name="SignIn"
           component={SignInScreen}
           options={{headerShown: false}}
                         />
                        <Stack.Screen
                         name="GetHead"
                         component={GetHead}
                         options={{headerShown: false}}
                     />     
                            
               </>
 
             }
       
       <Stack.Screen
               name="MainPage2"
               component={MainTab}
                             options={{ headerShown: false }}
                           
                         /> 
              <Stack.Screen
                name="MainReport"
                component={MainReport}
                options={{
                    headerShown: false
                }}
             />
               <Stack.Screen
                name="ErrorUploadScreen"
                component={ErrorUploadScreen}
                options={{
                    headerShown: false
                }}
            />
        <Stack.Screen
                name="Thank"
                component={Thank}
                options={{
                    headerShown: false
                }}
             />
              <Stack.Screen
                name="MyElementList"
                component={MyElementList}
                options={{
                    headerShown: false
                }}
            />
             <Stack.Screen
                name="GetOut"
                component={GetOut}
                options={{
                    title: "",
                    headerTintColor: 'black',
                    headerStyle: {
                   
                        headerHideShadow: true
                    },
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
            
                }}
                
            />
            <Stack.Screen
                        name="XAxisExample"
                        component={XAxisExample}
                        options={{headerShown: false}}
            /> 
           
                   <Stack.Screen
                        name="GetWorry"
                        component={GetWorry}
                        options={{headerShown: false}}
            /> 
              <Stack.Screen
                name="ElementList"
                component={ElementList}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="CameraLoading"
                component={CameraLoading}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="BlueTooth"
                component={BlueTooth}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.reset("MainPage")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
               <Stack.Screen
                name="ShopList"
                component={ShopList}
                options={{
                    title:"추천제품"
                }}
            />
              <Stack.Screen
                name="CameraInfo"
                component={CameraInfo}
                options={{
                    title: "",
                    headerTintColor: 'black',
                    headerStyle: {
                   
                        headerHideShadow: true
                    },
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
            
                }}
            />
            <Stack.Screen
                name="CameraCheck"
                component={CameraCheck}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.navigate("MainPage")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
              <Stack.Screen
                name="CameraConcern"
                component={CameraConcern}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.navigate("CameraCheck")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
             <Stack.Screen
                name="CameraIndicate"
                component={CameraIndicate}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.navigate("CameraConcern")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
              <Stack.Screen
                name="CameraPage"
                component={CameraPage}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.navigate("CameraRating")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
             <Stack.Screen
                name="CameraRating"
                component={CameraRating}
                options={{
                    title:"",
                    headerTintColor: 'black',
             
                    headerShadowVisible: false, // applied here
                    headerBackTitleVisible: false,
                    headerLeft: () => {<Pressable onPress={()=>navigation.navigate("CameraIndicate")}>
                      <Icon name="chevron-left" size={50}></Icon>
                    </Pressable>

                    }
                }}
            />
            
            <Stack.Screen
                name="GetEmail"
                component={GetEmail}
                 options={{
                     headerShown: false,
                     headerStyle: {
                        backgroundColor: 'white'
                      },}}
            />
            <Stack.Screen
                name="GetPassword"
                component={GetPassword}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GetNickName"
                component={GetNickName}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name="GetFinish"
                component={GetFinish}
                options={{headerShown: false}}
            />
            
            <Stack.Screen
                name="GetGender"
                component={GetGender}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="GetAge"
                component={GetAge}
                options={{headerShown: false}}
            />
              <Stack.Screen
                name="GetIndicate"
                component={GetIndicate}
                options={{headerShown: false}}
             />
              <Stack.Screen
           name="SignUp"
           component={SignInScreen}
           options={{headerShown: false}}
                         />
               <Stack.Screen
           name="Main"
           component={MainTab}
           options={{headerShown: false}}
                         />
                <Stack.Screen
                name="Upload"
                component={UploadScreen}
                options={{headerShown: false}}
            />
          <Stack.Screen
                name="HairCheck"
                component={HairCheck}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="SkinReport"
                component={SkinReport}
                options={{ title:"나의 피부 기록" }}
            />
       
      </Stack.Navigator>  
    )
}

export default RootStack
