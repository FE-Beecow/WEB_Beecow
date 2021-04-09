import { requestApi } from './baseApi'

import { getToken, checkLogin, clearToken } from '../../utils/storage';
import { REQUEST_TIMEOUT } from '../../common/constants';

export class BaseService {
  static defaultHeader = {
    'Content-Type': 'application/json',
    'Access-Control-Max-Age': '3600',
  };
  static formDataHeader = {
    'Content-Type': 'multipart/form-data'
  }
  constructor() {
    this.loadToken()
    //this.dispatch = dispatch
  }

  loadToken() {
    const token = checkLogin() ? getToken() : ''
    this.headers = {
      ...BaseService.defaultHeader,
      Authorization: `Bearer ${token}`
    }
    this.formDataHeaders = {
      ...BaseService.formDataHeader,
      Authorization: `Bearer ${token}`
    }
  }

  get = async (url, params, showLoading = true) => {
    // if (showLoading) {
    //   this.showLoading()
    // }

    return await requestApi.get(url, {
      params: params,
      headers: { ...this.headers },
      timeout: REQUEST_TIMEOUT
    })
      .catch((err) => {
        return this.handleError(err)
      }).finally(() => {
        // if (showLoading) {
        //   this.hideLoading()
        // }
      })
  }

  post = async (url, data) => {
    //this.showLoading()
    return await requestApi.post(url, data, {
      headers: { ...this.headers },
      timeout: REQUEST_TIMEOUT
    })
      .catch((err) => {
        return this.handleError(err)
      }).finally(() => {
        //this.hideLoading()
      })
  }

  put = async (url, data) => {
    this.showLoading()
    return await requestApi.put(url, data, {
      headers: { ...this.headers },
      timeout: REQUEST_TIMEOUT
    }).catch((err) => {
      return this.handleError(err)
    }).finally(() => {
      //this.hideLoading()
    })
  }

  delete = async (url, params) => {
    //this.showLoading()
    return await requestApi.delete(url, {
      data: params,
      headers: { ...this.headers },
      timeout: REQUEST_TIMEOUT
    }).catch((err) => {
      return this.handleError(err)
    }).finally(() => {
      //this.hideLoading()
    })
  }

  putFormData = async (url, params) => {
    const data = this.parseFormdata(params);
    //this.showLoading()
    return await requestApi.put(url, data, {
      headers: { ...this.formDataHeaders },
      timeout: REQUEST_TIMEOUT
    }).catch((err) => {
      return this.handleError(err)
    }).finally(() => {
      //this.hideLoading()
    })
  }

  postFormData = async (url, params) => {
    const data = this.parseFormdata(params);
    //this.showLoading()
    return await requestApi.post(url, data, {
      headers: { ...this.formDataHeaders },
      timeout: REQUEST_TIMEOUT
    }).catch((err) => {
      return this.handleError(err)
    }).finally(() => {
      //this.hideLoading()
    })
  }

  parseFormdata(model) {
    const formdata = new FormData();
    Object.keys(model || {}).forEach(p => {
      if (model[p]) {
        if (Array.isArray(model[p])) {
          model[p].forEach(q => {
            formdata.append(p + '[]', q);
          });
        } else {
          formdata.append(p, model[p]);
        }
      }
    });

    return formdata;
  }

  // showLoading() {
  //   this.dispatch({
  //     type: LoadingIndicatorActionTypes.SHOW_LOADING
  //   })
  // }
  // hideLoading() {
  //   this.dispatch({
  //     type: LoadingIndicatorActionTypes.HIDE_LOADING
  //   })
  // }

  // handleError(err) {
  //   // Do something with response error
  //   let message = i18next.t('Notification.DefaultError');
  //   if (err.response && err.response.status === 401) {
  //     //logout
  //     clearToken()
  //     this.dispatch({
  //       user: null,
  //       type: UserActionTypes.LOGIN,
  //     })
  //   } else if (err.response && err.response.data && (err.response.data.message || err.response.data.Message)) {
  //     message = err.response.data.message || err.response.data.Message;

  //     this.dispatch({
  //       type: NotificationActionTypes.ERROR,
  //       message: message
  //     })
  //   }
  //   return Promise.reject('Error');
  // }
}