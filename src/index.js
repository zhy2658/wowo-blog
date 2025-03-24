import _ from "lodash"
import './scss/style.scss';
import "bulma"


const sum = (m, n) => {
    return m + n
}
const user = {
    name: "wowo",
    password: "1233"
}
console.log(sum(10, 20))
console.log(_.flattenDeep([[1, 3, 54], [3, 4, 5], [312, 45, 21, 12]]))
console.log(_.cloneDeep(user))