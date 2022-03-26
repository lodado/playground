import axios from 'axios';

const baseDomain = 'https://jsonplaceholder.typicode.com';
const baseURL = `${baseDomain}`;

const Client = axios.create({
  baseURL,
  headers: {},
});

export default class Repository {
  resource = undefined;

  constructor({ resource }) {
    this.resource = resource;
  }

  get() {
    return Client.get(`${this.resource}`);
  }

  getPost(id: number) {
    return Client.get(`${this.resource}/${id}`);
  }

  create(payload: string) {
    return Client.post(`${this.resource}`, payload);
  }

  update(id: number, payload: number) {
    return Client.put(`${this.resource}/${id}`, payload);
  }

  delete(id: number) {
    return Client.delete(`${this.resource}/${id}`);
  }
}
