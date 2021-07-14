import {Method} from 'axios';
import store from './index'

export const loginconfig = {
    method: 'post' as Method,
    url: 'https://rbms-dev.enersys.hu/api/v1/auth/login',
    'headers': { 
        'X-Request-Locale': 'hu', 
        'Accept': 'application/json',
    },
    'data': {
        'email': '',
        'password': ''
    },
}
export function configWithAuth(method: string, route: string, data: any){
    return {
        method: method as Method,
        url: 'https://rbms-dev.enersys.hu/api/v1/' + route,
        'headers': { 
            'X-Request-Locale': localStorage.getItem("active_locale") || "en", 
            'Accept': 'application/json',
            'Authorization': 'Bearer ' + (store.state.user.token || ''),
            'X-User-UUID': store.state.user.uuid,
        },
        'data': data
    }
}