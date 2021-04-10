import { BaseService } from "./base/rest"

export class UserService extends BaseService {
  login = (data) => this.post('user/login', data)
  getAllBusiness = () => this.get('user/get-all-businesses')
  register = (data) =>  this.post('user/register', data)
}

export default new UserService()