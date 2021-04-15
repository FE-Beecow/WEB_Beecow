export const REQUEST_TIMEOUT = 30000
export const businessOpptions = ['farmer', 'buyer', 'shipper'];
export const categoriesOpptions = [
  { text: 'Vegetable', value: 0 },
  { text: 'Fruit', value: 1 },
  { text: 'Seafood', value: 2 },
  { text: 'Dried food', value: 3 }
]
export const shipperOpptions = [
  { text: 'Bus Services', value: 0 },
  { text: 'Fast Delivery Services', value: 1 },
  { text: 'Inner City Ship', value: 2 }
]
export const genderOptions = [
  { key: 'm', text: 'Male', value: true },
  { key: 'f', text: 'Female', value: false }
]

export const userOptions = [
  {
    key: 'edit',
    text: 'Edit Profile',
    value: 'edit',
    icon: 'edit'
  },
  {
    key: 'changePassword',
    text: 'Change Password',
    value: 'changePassword',
    icon: 'pencil alternate',
  },
  {
    key: 'logout',
    text: 'Logout',
    value: 'logout',
    icon: 'sign-out',
  },
]

export const messageTypes = {
  error: 'error',
  success: 'success'
}
export const listProduct = [
  { image: require('../assets/images/banner1.jpg'), name: 'apple', id: 0 },
  { image: require('../assets/images/banner1.jpg'), id: 1 },
  { image: require('../assets/images/banner1.jpg'), id: 2 }
]
export const unit = [
  { text: 'VND', value: 0 },
  { text: 'USD', value: 1 },
]