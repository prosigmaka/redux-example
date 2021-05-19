import { combineReducers } from 'redux'

import ThemeOptions from './ThemeOptions';
import candidateReducer from './candidate'

const rootReducer = combineReducers({
    ThemeOptions,
    candidateReducer
})
export default rootReducer
