import { httpService } from './httpService'



function getTasks() {
    return httpService.get(`task/`);
}

export const taskService = {
    getTasks
};