// import {opportunityTypes} from '../types/opportunity';
// import { SERVICE } from '../../config/config.json'
// import axios from 'axios'

// const oppotunityActions = {
//     getDetailData : () => async (dispatch) =>{
//         try {
//             const detailOpportunity = ( await axios.get(SERVICE.JAVA_SERVICE+"/plottinghist/001")).data.data;
//             console.log(detailOpportunity)
//             const payload = {detailData:detailOpportunity}
//             dispatch({ type: opportunityTypes.GET_DATA_DETAIL, payload })
//             return payload;
//         } catch (error) {
//             console.log(error);
            
//         }
//     }

// }

// export default oppotunityActions