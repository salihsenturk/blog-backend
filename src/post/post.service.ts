import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostDto } from './dtos/post.dto';
import { Post } from './post.entity';

@Injectable()
export class PostService {
	constructor(@InjectRepository(Post) private repo: Repository<Post>) {}

	create = (postDto: PostDto) => {
		const post = this.repo.create(postDto);
		return this.repo.save(post);
	};

	findByUserId = async (userId: number) => {
		const users = await this.repo.find({ where: { user: { id: userId } } });
		return users;
	};
}
