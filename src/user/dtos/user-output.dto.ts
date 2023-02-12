import { Expose } from 'class-transformer';
import { IsEmail, IsString } from 'class-validator';

export class UserOutputDto {
	@Expose()
	email: string;

	@Expose()
	displayName: string;

	@Expose()
	signature: string;
}
