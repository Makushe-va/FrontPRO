export class UserModel {
    fetchUserData(userId) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (userId % 2 === 0) {
                    reject(new Error(`User ${userId} not found`));
                } else {
                    resolve({ id: userId, name: `User ${userId}` });
                }
            }, 500);
        });
    }
}
