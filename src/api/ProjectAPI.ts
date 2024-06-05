import { isAxiosError } from "axios"
import { ProjectFormData, dashboardProjectSchema, } from "../types"
import api from "@/lib/axios"

// ! CREATE
export async function createProject(formData: ProjectFormData) {
    try {
        const { data } = await api.post('/projects', formData)
        return data
    } catch (error) {
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        }
    }
}

export async function getProjects() {
    try {
        const { data } = await api('/projects')
        const response = dashboardProjectSchema.safeParse(data)
        console.log(response);
        return  data 
       
    } catch (error) {
        console.log(error);
        if(isAxiosError(error) && error.response) {
            throw new Error(error.response.data.error)
        } 
    }
}
