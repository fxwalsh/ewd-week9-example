import InMemoryRepository from '../repositories/InMemoryRepository';
import userSchema from '../validators/userSchema';

const buildDependencies = () => {
  const dependencies = {
  };

  dependencies.userSchema = userSchema;

  if (process.env.DATABASE_DIALECT === "in-memory") {
    dependencies.usersRepository = new InMemoryRepository();
  } else if (process.env.DATABASE_DIALECT === "mongo") {
    throw new Error('Add Mongo Support');
  } else if (process.env.DATABASE_DIALECT === "mysql") {
    throw new Error('Add MySQL support');
  } else {
    throw new Error('Add DB Support to project');
  }
  return dependencies;
};

export default buildDependencies;
