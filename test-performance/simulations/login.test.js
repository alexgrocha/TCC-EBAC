import Login from "../request/login.request.js"
import { group } from "k6"

export default function(){

    let login = new Login()

    group('Login', () => {
        login.acess('user1','ebac@test')
    })
}