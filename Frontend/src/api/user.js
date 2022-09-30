import axiosInstance from "./axiosInstance";
import * as yup from 'yup';


const resource = 'user'

const UserAPI = {
    async getHomePage(body) {
        return axiosInstance({
            method: 'post',
            url: `${resource}/homepage`,
            data: body
        })
    },
    async login(body) {
        return axiosInstance({
            method: 'post',
            url: `/login`,
            data: body
        })
    }, 
    async signUp(body) {
        return axiosInstance({
            method: 'post',
            url: `${resource}/signup`,
            data: body
        })
    },
    async forgetPassword(body) {
        return axiosInstance({
            method: 'post',
            url: `${resource}/reset`,
            data: body
        })
    }
}



export default UserAPI

