import { candidateTypes } from '../types'

const initialState = {
    selectedAll: false,
    dataGrid: [],
    loading: true,
    dataItemTab: {},
    dataItem: {
        inAdd: false,
        inDetail: false,
        inStatus: false,
        inTab: false,
        inEdit:false,
    },
    dropdownData: {
        media: [],
    },
    informationBarData: {
        total_alsus_type: 0,
        total_alsus: 0,
        total_available: 0,
        total_in_use: 0,
    },
    activeModal: null,
    alsus_inUse: [],
    dataMaintenanceTab: []
}
const candidateReducer = (state = { ...initialState }, action) => {
    switch (action.type) {
        case candidateTypes.GET_DATA: {
            const {
                dataGrid,
                total,
            } = action.payload
            return {
                ...state,
                dataGrid,
                loading: false,
                dataStates: {
                    ...state.dataStates,
                    total,
                },
            }
        }
        case candidateTypes.GET_DATA_STATUS: {
            const {
                dataGrid,
                total,
            } = action.payload
            return {
                ...state,
                dataGrid,
                loading: false,
                dataStates: {
                    ...state.dataStates,
                    total,
                },
            }
        }
        case candidateTypes.GET_DATA_TAB: {
            const {
                dataTab,
            } = action.payload
            return {
                ...state,
                dataItemTab:{
                    ...state.dataItemTab,
                    ...dataTab
                },
                loading: false,
            }
        }
        // case candidateTypes.GET_DATA_TAB: {
        //     const {
        //         media,
        //     } = action.payload
        //     return {
        //         ...state,
        //         dropdownData:{
        //             ...state.dropdownData,
        //             media
        //         },
        //         loading: false,
        //     }
        // }
        case candidateTypes.ADDNEW: {
            const { dataItem } = action.payload
            return {
                ...state,
                loading: false,
                dataItem: {
                    ...state.dataItem,
                    ...dataItem
                },
                dataItemTab:{
                    ...state.dataItemTab,
                    ...dataItem.dataItemTab
                }
            }
        }

        case candidateTypes.RESET_FORM: {
            const { initialState } = action.payload
            return {
                ...state,
                dataItem: {
                    ...state.dataItem,
                    ...initialState,
                    loading: true,
                }
            }
        }

        case candidateTypes.CHANGE_DATA: {
            const { field, value } = action.payload
            return {
                ...state,
                dataItem: {
                    ...state.dataItem,
                    [field]: value,
                },
            }
        }
        case candidateTypes.CHANGE_DATA_TAB: {
            const { field, value } = action.payload
            return {
                ...state,
                dataItemTab: {
                    ...state.dataItemTab,
                    [field]: value,
                },
            }
        }
  
        case candidateTypes.REMOVE_DATA: {
            return {
                ...state,
                loading: true,
            }
        }
        case candidateTypes.SUBMIT: {
            return {
                ...state,
                loading: true,
            }
        }

        default:
            return { ...state }
    }
}
export default candidateReducer
