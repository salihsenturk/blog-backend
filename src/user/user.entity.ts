import { IsEmail } from 'class-validator';
import { Post } from 'src/post/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	email: string;

	@Column()
	displayName: string;

	@Column()
	password: string;

	@Column()
	signature: string;

	@OneToMany(() => Post, (post) => post.user)
	posts: Post[];
}
