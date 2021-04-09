import { BaseService } from "./base/rest"

export class UserService extends BaseService {
  login = (data) => this.post('user/login', data)
  getAllBusiness = () => this.get('user/get-all-businesses')
}

export default new UserService()