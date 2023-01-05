export class UserDto {
  id?: number;
  name: string = "";
  password?: string = "";
  email?: string = "";

  // static fromJson(json: any): UserDto {
  //   const user = new UserDto();
  //   user.id = json.Id;
  //   user.name = json.Username;
  //   user.password = json.Password;
  //   user.email = json.Email;
  //   return user;
  // }
}
