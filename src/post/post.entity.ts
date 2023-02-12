import { User } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
	@PrimaryGeneratedColumn()
	id: number;

	@ManyToOne(() => User, (user) => user.posts, { eager: true })
	user: User;

	@Column()
	title: string;

	@Column()
	body: string;

	@Column()
	createDate: Date;
}
