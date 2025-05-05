import { Injectable } from '@nestjs/common';
import e from 'express';
import { CreateUserDto } from './create-user.dto';
import { User } from './entities/user.entity';
import { FindUserDto } from './find-user.dto';

@Injectable()
export class UserService {
    private users = [
        {
            userId: 1,
            username: 'john',
            password: 'changeme',
            email: 'john@user.com'
        },
        {
            userId: 2,
            username: 'maria',
            password: 'guess',
            email: 'maria@user.com'
        }
    ];

    async findOne(findUserDto: FindUserDto): Promise<User | undefined> {
        return this.users.find(user => user.username === findUserDto.username);

    }

    async create(
        createUserDto: CreateUserDto
    ): Promise<User>{
        const newUser = {
            userId: this.users.length + 1,
            ...createUserDto,
        };
        this.users.push(newUser);
        return newUser;
    }
    

}
