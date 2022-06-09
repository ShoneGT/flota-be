import { HttpException, HttpStatus, BadRequestException, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }


  async validateUser(email: string, pass: string): Promise<any> {
    const user = await this.userService.findByEmail(email)

    if (!user) {
      throw new BadRequestException('Wrong credentials');
    }

    await AuthService.verifyPassword(pass, user.password);

    const { password, ...result } = user;
    return result;
  }

  private static async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    console.log('validate', plainTextPassword)
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      user,
    };
  }
}
