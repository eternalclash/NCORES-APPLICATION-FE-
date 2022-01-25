import { NavigationContainer } from '@react-navigation/native'
import React,{useState,useEffect} from 'react'
import { StyleSheet, View, Text ,Pressable} from 'react-native'
import { Rating } from 'react-native-ratings'
import { actionCreators as checkActions } from '../../redux/modules/check'
import { useDispatch,useSelector } from 'react-redux'
import CustomButton from '../CustomButton'
const CameraRating = ({ navigation }) => {
    const dispatch = useDispatch();
    const cameraCheck = useSelector(state => state.check.cameraCheck)
    const [rate,setRate] = useState(2)
    useEffect(() => {
        if (cameraCheck)
        {   
            dispatch(checkActions.cameraCheck(false))
            navigation.navigate("CameraPage")
            }
    }, [cameraCheck])
    function ratingCompleted(rating) {
        console.log("Rating is: " + rating)
        setRate(rating)
    }
    const rateHandler = () => {
         
        dispatch(checkActions.ratingAPI(rate))
        // dispatch(signActions.setWorryAPI())

        // if (check)
        //     navigation.navigate("GetAge")
    }

    return (
        <View style={styles.main}> 
            <Text style={styles.font}>자가 점수 체크</Text>
            <View style={styles.main1}>
            <Rating
                type='custom'
                jumpValue={1/2}
                ratingBackgroundColor='gray'
                tintColor='#ffffff'
                jumpValue={1}
                ratingCount={5}
                imageSize={60}
                showRating
                startingValue={2}
                onFinishRating={ratingCompleted}
            />
            </View>
            <Pressable onPress={rateHandler} style={styles.form}>   
            <View >     
                   
                    <Text style={styles.textMedium}>시작하기</Text>    
                   
                    </View>
                    </Pressable>

        </View>
    )
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    
    },
    font: {
        fontSize: 30,
        position: 'absolute',
        top:150,
    },
    main1: {
        position: 'absolute',
        top:250,
    },
    textMedium: {
        color:"white",
        fontSize: 20,
        marginBottom:5,
    },
    form: {
        backgroundColor:"black",
        width: '90%',
        height:60,
        marginTop:40,
        justifyContent: "center",
        alignItems:"center",
      
    },
})
export default CameraRating
