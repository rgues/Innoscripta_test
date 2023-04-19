
const APP_PREFIX = 'INNOSCRIPTA';


// Set session data
export function setStorage(key: string, value: string) {
    localStorage.setItem(`${APP_PREFIX}_${key}`, value);
}

// Get session data
export function getStorage(key: string) {
    return  localStorage.getItem(`${APP_PREFIX}_${key}`);
}

// Remove session data
export function removeStorage(key: string) {
    return  localStorage.removeItem(`${APP_PREFIX}_${key}`);
}