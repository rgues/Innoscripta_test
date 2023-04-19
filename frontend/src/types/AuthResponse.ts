import { User } from './User';

export interface AuthResponse {
    status: string;
    message: string;
    data: {
        user: User;
        token: string;
    }
}