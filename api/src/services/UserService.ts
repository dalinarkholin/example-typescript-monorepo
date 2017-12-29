import User from "~/infrastructure/db/models/User";

class UserService {

  static get(userSub: string) {
    return User.findOne({
      where: {
        sub: userSub
      }
    })
  }
}

export default UserService;