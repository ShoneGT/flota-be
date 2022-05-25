import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
const bcrypt = require('bcrypt');

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  // async validateUser(username: string, pass: string): Promise<any> {
  //   console.log('validateeee');
  //   const user = await this.userService.findOne(username);
  //   if (user && user.password === pass) {
  //     const { password, ...result } = user;
  //     return result;
  //   }
  //   return null;
  // }
  async validateUser(email: string, pass: string): Promise<any> {
    console.log('validatetetetetet');
    const user = await this.userService.findByEmail(email)
    await AuthService.verifyPassword(pass, user.password);
    user.password = undefined;
    return user;
  }

  private static async verifyPassword(plainTextPassword: string, hashedPassword: string) {
    const isPasswordMatching = await bcrypt.compare(
      plainTextPassword,
      hashedPassword
    );
    if (!isPasswordMatching) {
      throw new HttpException('Wrong credentials provided', HttpStatus.BAD_REQUEST);
    }
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.userId };
    console.log('user iz auth login', user);
    const userObj = await this.userService.findByEmail(user.email)
    userObj.password = undefined
    return {
      access_token: this.jwtService.sign(payload),
      userObj
    };
  }
}
