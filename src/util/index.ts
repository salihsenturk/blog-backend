import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export default {
	createHashWithSalt: async (value: string, salt: string) => {
		if (!salt) {
			salt = randomBytes(8).toString('hex');
		}

		return {
			hash: ((await scrypt(value, salt, 32)) as Buffer).toString('hex'),
			salt,
		};
	},
};
