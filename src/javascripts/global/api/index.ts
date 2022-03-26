import Repository from './repository';

const exPath = '/todos/1';

const repositories = {
  ex: new Repository({ resource: exPath }),
};

const repositoryFactory = {
  get: (name: string) => repositories[name],
};

export default repositoryFactory;
