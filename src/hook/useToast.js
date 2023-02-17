import { toast } from "react-toastify";

export function showSucessToast(res, msg = "Operation is sucessfull") {
    const message = res.data.message || msg;
    return toast.success(message);
}

export function showFailureToast(error, msg = "Operation is not sucessfull") {
    const message = error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : msg;
    return toast.error(message);
}

export function updateLoadingSucessToast(
    toastId,
    res,
    msg = "Operation is sucessfull"
) {
    const message = res.data.message || msg;
    return toast.update(toastId.current, {
        render: message,
        type: "success",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}
export function updateLoadingFailureToast(
    toastId,
    error,
    msg = "Operation is not sucessfull"
) {
    const message = error.response.data.message
        ? error.response.data.message
        : error.message
        ? error.message
        : msg;
    return toast.update(toastId.current, {
        render: message,
        type: "error",
        isLoading: false,
        autoClose: 2000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
}

export function promiseToast(promise, successMessage) {
    return toast.promise(promise, {
        pending: `Processing...`,
        success: successMessage,
        error: {
            render({ data }) {
                if (typeof data === "string") return data;
                return data.response.data.message || data.response.data;
            },
        },
    });
}
