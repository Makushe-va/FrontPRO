import { UserModel } from "./Model.js";
import { UserController } from "./Controller.js";
import { UserView } from "./View.js";

const model = new UserModel();
const controller = new UserController(model);
const view = new UserView();

const run = async () => {
    const result = await controller.getUsersData([1,2,3,4,5]);
    view.render(result);
};

run();

