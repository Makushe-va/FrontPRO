export class UserController {
    model = null;
    constructor(model) {
        this.model = model;
    }
    async getUsersData(userIds) {
        const promises = userIds.map(id => this.model.fetchUserData(id));
        const results = await Promise.allSettled(promises);
        const success = [];
        const errors = [];

        results.forEach((result, index) => {
        if (result.status === 'fulfilled') {
            success.push(result.value);
        } else {
            errors.push ({
            id: userIds[index],
            error: result.reason.message});
        }
        });
        return {success, errors};
    }
}
