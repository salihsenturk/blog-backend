import { IsEmail, IsString } from 'class-validator';

export class UserInputDto {
	@IsEmail()
	email: string;

	@IsString()
	password: string;
}
