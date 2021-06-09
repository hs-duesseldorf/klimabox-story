import { destroy, get, patch, post } from './BaseAPI';

const uri = encodeURIComponent;

export const getUser = (id: number) => {
  return get('/users/' + uri(id))
}

export const updateUser = (id: number, data: any) => {
  return patch('/users/' + uri(id), {
    user: data
  })
}

export const createUser = (data: any) => {
  return post('/users/', {
    user: data
  })
}
