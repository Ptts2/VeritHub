import api from '@/services/api'


export default {

  create (credentials) {
    return api().post('/subject/create', credentials);
  },
}