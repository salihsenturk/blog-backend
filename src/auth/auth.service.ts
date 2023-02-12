import { BadRequestException, Inject, Injectable, NotFoundException } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import util from 'src/util';

@Injectable()
export class AuthService {
	@Inject(UserService)
	private readonly userService: UserService;

	async signIn(email: string, password: string) {
		const user = await this.userService.findByEmail(email);
		if (!user) {
			throw new NotFoundException('User not found!');
		}

		const [salt, storedHash] = user.password.split('.');
		const { hash } = await util.createHashWithSalt(password, salt);
		if (storedHash !== hash) {
			throw new BadRequestException('Password do not match with the user!');
		}
		return user;
	}
}
