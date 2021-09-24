import { get, patch, post, destroy } from './BaseAPI';

const uri = encodeURIComponent;

export const getUser = (id: number) => {
  return get('/users/' + uri(id))
}

export const updateUser = (data: any, id: number) => {
  return patch('/users/' + uri(id), {
    user: data
  })
}

export const createUser = (data: any) => {
  return post('/users/', {
    user: data
  })
}

export const login = (data: any) => {
  return post('/authenticate/', {
    user: data
  })
}

export const currentUser = () => {
  return get('/sessions/')
}

export const logout = () => {
  return get('/logout/')
}

export const favorisePost = (favorite_blogpost: any) => {
  return post('/favorise/', {
    favorite_blogpost
  })
}

export const deFavorisePost = (favorite_blogpost: any) => {
  return post('/defavorise/', {
    favorite_blogpost
  })
}

export const favoritPosts = () => {
  return get('/favorits/')
}

export const getTopics = () => {
  return get('/topics/')
}


export const removeTopic = (topic: any) => {
  return post('/remove_topic/', {
    topic
  })
}

export const addTopic = (topic: any) => {
  return post('/add_topic/', {
    topic
  })
}

export const getTickets = () => {
  return get('/tickets/')
}

export const getTicket = (id: number) => {
  return get('/tickets/' + uri(id))
}

export const deleteTicket = (id: number) => {
  return destroy('/tickets/' + uri(id))
}

export const createTicket = (data: any) => {
  return post('/tickets/', {
    ticket: data
  })
}

export const createComment = (data: any, id: number) => {
  return post('/comments/', {
    comment: data,
    id: id
  })
}

export const deleteComment = (id: number) => {
  return destroy('/comments/' + uri(id))
}

export const deleteUser = (id: number) => {
  return destroy('/users/' + uri(id))
}

export const updatePw = (data: any) => {
  return patch('/resets_pw/', {
    pw_reset: data
  })
}

export const requestPwReset = (data: any) => {
  return post('/password_resets/', {
    pw_reset: data
  })
}



