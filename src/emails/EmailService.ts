import { User, UserModel } from './../schemas/User';

const sendmail = require('sendmail')();

export class EmailService {

	sendMail(from: string, to: string, subject: string, message: string): Promise<any> {
		let filter = to.includes('@') ? { email: to } : { username: to }

		return new Promise((resolve, reject) => {
			UserModel.findOne(filter, (err, user: User) => {
				if (err || !user) {
					reject("There is no user with this email | username");
				}
				else {
					sendmail({
						from: from,
						to: user.email,
						subject: subject,
						html: message,
					}, function (err, reply) {
						if (err) {
							reject("Error sending the email");
						}
						else {
							resolve();
						}
					});
				}
			});
		});
	}
}