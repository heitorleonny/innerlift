import { Controller, Body, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() body: any): Promise<string>{
        return this.authService.login(body.username, body.password);
    }

    @Post('register')
    async register(@Body() body: any): Promise<string>{
        return this.authService.register(body.username, body.email, body.password);
    }
}
