import {
	Body,
	Controller,
	Get,
	NotFoundException,
	Param,
	Post,
	UseGuards,
	UsePipes,
	ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';
import { PostDto } from './dtos/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
	constructor(private postService: PostService) {}

	@Post()
	@UseGuards(AuthGuard)
	createPost(@Body() body: PostDto) {
		return this.postService.create(body);
	}

	@Get('/:userId')
	@UseGuards(AuthGuard)
	async getPosts(@Param('userId') userId: number) {
		return await this.postService.findByUserId(userId);
	}
}
