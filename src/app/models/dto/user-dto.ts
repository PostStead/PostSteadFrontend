export class UserDto {
  id?: string;
  name: string = "";
  email?: string = "";
  firstName?: string = "";
  lastName?: string = "";
  phone?: string = "";
  errorCode?: number = 0;
  errorMessage?: string = "";

  // static fromJson(json: any): UserDto {
  //   const user = new UserDto();
  //   user.id = json.Id;
  //   user.name = json.Username;
  //   user.password = json.Password;
  //   user.email = json.Email;
  //   return user;
  // }
}
