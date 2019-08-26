/*
    Bu sayfa örnek amaçlıdır.
    Şuan Aktif değil
*/

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';
//Kimlik gerektirmeyen api istekleri için axios yarattım
const publicRequestInstance = axios.create();
//Kimlik doğrulaması gerektiren istekler için(--------NOT ACTİVE----------)
const authRequestInstance = axios.create();
//actionslar
import {
    
} from '../actions';

//authRequestInstance için middleware(--------NOT ACTİVE----------)
//Burada elimdeki tokenin expire süresine bakıyorum.Eğer bitmişse yeni token istiyorum
authRequestInstance.interceptors.request.use(async (config) => {
    //EXPIRE TIME CONTROLL
    return config;
}, (error) => {
    return Promise.reject(error);
});


//TOKEN REFSRESH(--------NOT ACTİVE----------)
export const refreshToken = (async (refreshToken) => {
    return new Promise((resolve, reject) => {
      return publicRequestInstance.post('xxx','{deviceInfo:info}',{headers:{Authorization:refreshToken}}).then((response) => {
        AsyncStorage.clear();
        AsyncStorage.setItem('@authToken',JSON.stringify(response.data));
        //authSaveAsync(response.data);
        //alert(JSON.stringify(response.data));
        resolve(response.data.na_accessToken);
      }).catch((error) => {
        reject(error)
      })
    })
});

//Arama Sunucusuna istek atıyorum
export const searchService = (data) => {
    return (dispatch) => {
        /*
        authRequestInstance.post("http://xxx:5010/search/customer",{data:data})
            .then(res => {
                dispatch(yakinKaydet(res.data));
            }).catch(err => {
                alert(err);
            })
        */
    }
}
