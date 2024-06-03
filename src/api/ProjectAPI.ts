import { isAxiosError } from "axios"
import { ProjectFormData } from "types"
import api from "@/lib/axios"

// ! CREATE
export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        console.log(data);
        // return data
    } catch (error) {
        // if(isAxiosError(error) && error.response) {
        //     throw new Error(error.response.data.error)
        // }
        console.log(error);
    }
}