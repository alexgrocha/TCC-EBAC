import http from 'k6/http';
import { check } from 'k6';

export const options = {
    vus: 20, 
    duration: '60s', 
    stages: [
        { duration: '20s', target: 20 }, 
    ],
};

export default class Login {
    acess(user, pass) {
        let response = http.post('http://lojaebac.ebaconline.art.br/minha-conta/', JSON.stringify({
            "username": user,
            "password": pass
        }))
        check(response, { 'Login deve retornar 200': r => r && r.status === 200 })
    }
} 