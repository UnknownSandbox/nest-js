import {IRepository} from "../interfaces/IRepository";
import {Repository as ORMRepository, Connection as ORMConnection, Repository as ORMRepoitory} from "typeorm";

/**
 * @TODO https://github.com/Microsoft/TypeScript/issues/21671
 */
export abstract class Repository<Entity> implements IRepository<Entity> {
  protected _repository: ORMRepository<Entity>;

  constructor( connection: ORMConnection, entityName: string) {
    this._repository = connection.getRepository(entityName);
  }

  async getById(id: number) {
    return await this._repository.findOneById(id);
  }

  async findAll() {
    return await this._repository.find();
  }

  async count() {
    return await this._repository.count();
  }

  async create(entity: any) {
    return await this._repository.save(entity);
  }

  async update(entity: any) {
    return await this._repository.save(entity);
  }

  async remove(id: number) {
    return await this._repository.deleteById(id);
  }

}
