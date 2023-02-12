import { CanActivate, ExecutionContext } from '@nestjs/common';

export class AuthGuard implements CanActivate {
	canActivate(context: ExecutionContext): boolean {
		const { session } = context.switchToHttp().getRequest();
		return session?.userId;
	}
}
