export class User {
    id?: number;
    username: string = "";
    password: string = "";
    confirmPassword?: string = "";
    email?: string = "";

    static fromJson(json: any): User {
        const user = new User();
        user.id = json.Id;
        user.username = json.Username;
        user.password = json.Password;
        user.email = json.Email;
        return user;
    }
}