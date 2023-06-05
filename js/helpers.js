export const setErrorMessage = message => {
    document.getElementById('errorMessage').innerText = message;
};

export const setEventById = (id, event, callback) => {
    document.getElementById(id).addEventListener(event, callback);
}