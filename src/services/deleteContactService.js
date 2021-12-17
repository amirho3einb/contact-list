import http from "./httpService";

export function deleteContacts(id) {
    return http.delete(`/contacts/${id}`);
}
