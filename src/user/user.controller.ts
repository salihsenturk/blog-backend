import { Controller, Get, NotFoundException, Param, UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { Serialize } from 'src/interceptors/serialize.interceptor';
import { UserOutputDto } from './dtos/user-output.dto';
import { UserService } from './user.service';

@Controller('user')
@Serialize(UserOutputDto)
export class UserController {
	constructor(private userService: UserService) {}

	@Get('/:id')
	@UseGuards(AuthGuard)
	async getUserInfo(@Param('id') id: number) {
		const user = await this.userService.findById(id);
		console.log('User: ' + JSON.stringify(user));
		if (!user) {
			throw new NotFoundException('User not found!');
		}
		return user;
	}
}
