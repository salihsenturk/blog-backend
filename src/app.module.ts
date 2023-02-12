import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { CommentModule } from './comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { APP_PIPE } from '@nestjs/core';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';

@Module({
	imports: [
		PostModule,
		CommentModule,
		TypeOrmModule.forRootAsync({
			useFactory: () => {
				return {
					type: 'sqlite',
					database: 'db.sqlite',
					entities: ['**/*.entity.js'],
					synchronize: true,
				};
			},
		}),
		AuthModule,
		UserModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
