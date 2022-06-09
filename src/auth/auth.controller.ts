import { Request, Controller, Post, UseGuards, Body } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller()
export class AuthController {
	constructor(private readonly authService: AuthService) {}

	@UseGuards(LocalAuthGuard)
	@Post('/auth/login')
	async login(@Request() req) {
		return this.authService.login(req.user);
	}

// 	@Post('/auth/register')
// 	@ApiResponse({
// 		description: 'Register user and add first baby with data',
// 		type: [TokenDto],
// 	})
// 	async register(@Body() body: RegisterDto): Promise<TokenDto> {
// 		return this.authService.register(body);
// 	}
}
