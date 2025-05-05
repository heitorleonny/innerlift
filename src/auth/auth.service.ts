import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { UserRegisterDto } from './dto/user-register.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UserService){}

    async login(user: UserLoginDto): Promise<any>{
        return 'token';
    }

    async register(user: UserRegisterDto): Promise<any>{
        return 'token';
}
}
