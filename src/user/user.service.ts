import { HttpException, NotFoundException, HttpStatus, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity'
const bcrypt = require('bcrypt');

@Injectable()
export class UserService {
  constructor(@InjectRepository(User) private repo: Repository<User>) { }

  async create(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

    const user = this.repo.create({
      ...createUserDto,
      password: hashedPassword
    })
    return this.repo.save(user)
  }

  findAll() {
    return this.repo.find({ relations: ['role'] })
    // return this.repo.find()
  }

  async findByEmail(email: string) {
    const user = await this.repo.findOne({ email });
    console.log('email', email);

    if (user) {
      // user.password = ''
      return user;
    }
    throw new HttpException('User with this email does not exist', HttpStatus.NOT_FOUND);
  }

  findOne(id: number) {
    return this.repo.findOne(id)
  }

  async update(id: number, updateUserDto: Partial<UpdateUserDto>) {

    await this.repo.update(id, updateUserDto);

    const user = await this.repo.findOne(id, { relations: ['role']} );

    if (user) {
      return user
    }
    throw new NotFoundException(id);

    // if (!user) throw new NotFoundException('User not found');

  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
