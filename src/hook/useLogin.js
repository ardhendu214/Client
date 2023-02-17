import { decodeToken, isExpired } from "react-jwt";
import { showFailureToast } from "./useToast";
export function setHeaderAtLocalStorage(token) {
    localStorage.setItem("auth-token", token);
}

export function getHeaderFromLocalStorage() {
    return localStorage.getItem("auth-token");
}

export function removeHeaderFromLocalStorage() {
    localStorage.removeItem("auth-token");
}
export function headers() {
    return {
        headers: {
            "auth-token": getHeaderFromLocalStorage(),
        },
    };
}

export function getToken() {
    if (authentication()) return decodeToken(getHeaderFromLocalStorage());
    return null;
}

export function authentication() {
    return (
        getHeaderFromLocalStorage() && !isExpired(getHeaderFromLocalStorage())
    );
}
