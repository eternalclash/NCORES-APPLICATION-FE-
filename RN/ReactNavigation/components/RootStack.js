import React from 'react'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import SignInScreen from './SignInScreen';
import GetEmail from './SignUp/GetEmail';
import GetPassword from './SignUp/GetPassword';
import GetNickName from './SignUp/GetNickName';
import GetFinish from './SignUp/GetFinish';
const RootStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="GetEmail"
                component={GetEmail}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetPassword"
                component={GetPassword}
                options={{
                    title:''
                }}
            />
            <Stack.Screen
                name="GetNickName"
                component={GetNickName}
                options={{
                    title:''
                }}
            />
             <Stack.Screen
                name="GetFinish"
                component={GetFinish}
                options={{headerShown: false}}
            />
             <Stack.Screen
                name="Get"
                component={GetFinish}
                options={{headerShown: false}}
            />
      </Stack.Navigator>  
    )
}

export default RootStack