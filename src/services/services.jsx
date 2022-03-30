import axios from "axios";
import { URL_BACKEND } from "../environments/environments";
import { authAxios } from "./axiosHelper";


export const getAllAreas = async () => {
    const rpta = await authAxios.get(`${URL_BACKEND}/area/getAllAreas`, {
    });
    return rpta
}

export const obtenerDataTarea = async (id) => {
    const rpta = await authAxios.get(`${URL_BACKEND}/task/getTask/${id}`)
    return rpta
}

export const postCreateData = async (data) => {
    const rpta = await authAxios.post(`${URL_BACKEND}/task/perform`,
        JSON.stringify(data),
        {
            headers: {'Content-Type': 'application/json' }
        })
    return rpta
}