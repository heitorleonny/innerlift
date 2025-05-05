import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
    async login(user: string, pass: string): Promise<any>{
        return `Hello from login! ${user}`;
    }

    async register(user: string, email: string, pass: string, ): Promise<any>{
        return `Hello from register! ${user}`;
}
}
