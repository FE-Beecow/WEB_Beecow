export const REQUEST_TIMEOUT = 30000
export const businessOpptions = ['farmer', 'buyer', 'shipper'];
export const categoriesOpptions = ['vegetable', 'fruit', 'seafood', 'dried food']
export const shipperOpptions = [
  { text: 'Bus Services', value: 0 },
  { text: 'Fast Delivery Services', value: 1 },
  { text: 'Inner City Ship', value: 2 }
]
export const genderOptions = [
  { key: 'm', text: 'Male', value: 'male' },
  { key: 'f', text: 'Female', value: 'female' },
  { key: 'o', text: 'Other', value: 'other' },
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