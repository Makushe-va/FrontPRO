
export class UserView {
    render(result) {
        console.log("✅ Success:", result.success);
        console.log("❌ Errors:", result.errors);
    }
}
