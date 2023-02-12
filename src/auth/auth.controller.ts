import { Body, Controller, Inject, Post, Session, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { UserInputDto } from 'src/user/dtos/user-input.dto';
import { UserService } from 'src/user/user.service';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
	constructor(private authService: AuthService, @Inject(UserService) private userService: UserService) {}

	@Post('/signin')
	async signIn(@Body() body: UserInputDto, @Session() session: any) {
		const user = await this.authService.signIn(body.email, body.password);
		session.userId = user.id;
		return user;
	}

	@Post()
	@UseGuards(AuthGuard)
	changePassword(@Body() body: UserInputDto, @Session() session: any) {}
}
