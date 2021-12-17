import http from "./httpService";

export function getALLContacts() {
    return http.get("/contacts");
}
