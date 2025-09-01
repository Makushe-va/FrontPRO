import { UserModel } from "./Model.js";
import { UserController } from "./Controller.js";
import { UserView } from "./View.js";

const model = new UserModel();
const controller = new UserController(model);
const view = new UserView();

controller.getUsersData([1, 2, 3, 4, 5]).then(result => {
    view.render(result);
});
