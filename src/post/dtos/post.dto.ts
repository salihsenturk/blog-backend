import { Optional } from '@nestjs/common';
import { Expose } from 'class-transformer';
import { IsDateString, IsString } from 'class-validator';

export class PostDto {
	@Expose()
	@Optional()
	id: number;

	@Expose()
	@IsString()
	title: string;

	@Expose()
	@IsString()
	body: string;

	@Expose()
	@IsDateString()
	createDate: Date;
}
