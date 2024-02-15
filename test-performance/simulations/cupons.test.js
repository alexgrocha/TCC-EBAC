import Cupons from '../request/cupons.request.js';
import { group } from "k6"

export default function () {

    let token = 'TGETAqW3FeJhYzpAYJmJAYyEyYWRta33RTey'
    let cupons = new Cupons()

    group('List cupons', () => {
        cupons.list(token)
    })
}
