import { candidateTypes } from "../types";
import { SERVICE } from "../../config/config.json";
import axios from "axios";
const candidateActions = {
  getData: () => async (dispatch) => {
    try {
      const dataClient = (await axios.get(SERVICE.DATABASE+"/candidate"))
        .data;
      const payload = { dataGrid: dataClient };
      dispatch({ type: candidateTypes.GET_DATA, payload });
      return payload;
    } catch (e) {
      console.log(e);
      const payload = { dataGrid: [] };
      dispatch({ type: candidateTypes.GET_DATA, payload });
      return payload;
    }
  },
  getDataStatus: (status) => async (dispatch) => {
    try {
      const dataClient = (
        await axios.get(
          SERVICE.JAVA_SERVICE + "/candidate/availability/" + status
        )
      ).data.data;
      const payload = { dataGrid: dataClient };
      dispatch({ type: candidateTypes.GET_DATA_STATUS, payload });
      return payload;
    } catch (e) {
      console.log(e);
      const payload = { dataGrid: [] };
      dispatch({ type: candidateTypes.GET_DATA_STATUS, payload });
      return payload;
    }
  },
  getDataTab: (id) => async (dispatch) => {
    try {
      const dataClient = (
        await axios.get(SERVICE.DATABASE + "/candidate/" + id)
      ).data;
      const payload = { dataTab: dataClient };
      dispatch({ type: candidateTypes.GET_DATA_TAB, payload });
      return payload;
    } catch (e) {
      console.log(e);
      const payload = { dataGrid: [] };
      dispatch({ type: candidateTypes.GET_DATA_TAB, payload });
      return payload;
    }
  },
  getMedia: () => async (dispatch) => {
    try {
      const dataMedia = (await axios.get(SERVICE.JAVA_SERVICE + "/media/name"))
        .data.data;
      const payload = { media: dataMedia };
      dispatch({ type: candidateTypes.GET_DATA_MEDIA, payload });
      return payload;
    } catch (e) {
      return e;
    }
  },
  onAdd: (value) => async (dispatch) => {
    const dataItem = {
      ...value,
    };
    dispatch({
      type: candidateTypes.ADDNEW,
      payload: { dataItem },
    });
  },
  remove: (id) => async (dispatch) => {
    try {
      await axios.delete(SERVICE.DATABASE + "/candidate/" + id);
      dispatch({ type: candidateTypes.REMOVE_DATA });
      return { isError: false };
    } catch (e) {
      console.log(e);
      return { isError: true, message: e.toString() };
    }
  },
  onChangeTab: ({ field, value }) => (dispatch) => {
    const payload = { field, value };
    dispatch({ type: candidateTypes.CHANGE_DATA_TAB, payload });
  },
  onChange: ({ field, value }) => (dispatch) => {
    const payload = { field, value };
    dispatch({ type: candidateTypes.CHANGE_DATA, payload });
  },
  // discard: () => (dispatch) => dispatch({ type: masterEmployeeTypes.DISCARD }),
  onSubmit: ({ dataItem }) => async (dispatch) => {
    try {
      let variables = {
        nama: dataItem.nama,
        email: dataItem.email,
        noHp: dataItem.noHp,
      };
      const dataTab = await (
        await axios.post(SERVICE.DATABASE+ "/candidate", variables)
      ).data;
      dispatch({ type: candidateTypes.SUBMIT });
      return { isError: false, id: dataTab.id };
    } catch (e) {
      console.log(e);
      return { isError: true, message: e.toString() };
    }
  },
  onSubmitTab: ({ dataItemTab }) => async (dispatch) => {
    try {
      let variables = {
        nama: dataItemTab.nama,
        jenisKelamin: dataItemTab.jenisKelamin,
        tempatLahir: dataItemTab.tempatLahir,
        tanggalLahir: dataItemTab.tanggalLahir,
        alamat: dataItemTab.alamat,
        email: dataItemTab.email,
        noHp: dataItemTab.noHp
      };
      await axios.put(SERVICE.DATABASE + "/candidate/" + dataItemTab.id, variables);
      dispatch({ type: candidateTypes.SUBMIT });
      return { isError: false };
    } catch (e) {
      console.log(e);
      return { isError: true, message: e.toString() };
    }
  },

  resetForm: (initialState) => (dispatch) => {
    dispatch({ type: candidateTypes.RESET_FORM, payload: { initialState } });
  },
};
export default candidateActions;
