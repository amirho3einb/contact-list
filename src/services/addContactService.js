import http from "./httpService";

export function addOneContact(data) {
    return http.post(`/contacts/`, data);
}