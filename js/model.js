export class UserModel {
    async fetchUserData(userId) {
        await new Promise(resolve => setTimeout(resolve, 500));
        if (userId % 2 === 0) {
            throw new Error(`User ${userId} not found.`);
        }
        return {id: userId, name: `User ${userId}`};
    }
}