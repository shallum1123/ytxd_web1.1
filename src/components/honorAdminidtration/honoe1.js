import axios from '../../api/axios'
const requests = {
        // add
        add (data) {
            return axios('/function/query-tree', {
                method: 'post',
                data:data
            })
        },
}
export default requests