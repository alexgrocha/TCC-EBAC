import http from 'k6/http';
import { check, sleep } from 'k6';

export default class Cupons {
    list(token) {
        let response = http.get('http://lojaebac.ebaconline.art.br/wp-json/wc/v3/products', {
            headers: {
                Autorization: `Bearer ${token}`
            }
        })
        check(response, { 'Listagem deve retornar 200': r => r && r.status === 201 })
    }
} 