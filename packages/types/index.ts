export interface Error {
    response: "Error",
    message: string
}

export interface Success<T> {
    response: "Success",
    data: T
}

export type ResponseFormat<T> = Error | Success <T>

export interface User {
    username: string;
    password: string;
}