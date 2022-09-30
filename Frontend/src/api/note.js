import axiosInstance from "./axiosInstance"

const resource = 'note'

const Note = {
    getHomePage(){
        const response = axiosInstance({
            method: 'POST',
            url: `${resource}/homepage`
        })
        return response
    },
    updateNote(body){
        const response = axiosInstance({
          method: 'PUT',
          url: `${resource}/updatenote`,
          data: body
        })
        return response
    }
}

export default Note