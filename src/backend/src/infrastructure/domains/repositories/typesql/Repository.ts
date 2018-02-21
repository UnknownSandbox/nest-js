import {IRepository} from "../interfaces/IRepository";
import {Connection, ConnectionManager, getRepository, Repository as ORMRepository} from "typeorm";
import { InjectRepository } from '@nestjs/typeorm';

/**
 * @TODO https://github.com/Microsoft/TypeScript/issues/21671
 */
export abstract class Repository<Entity> implements IRepository<Entity> {
  protected _repository: ORMRepository<Entity>;

  constructor(entityClass: any) {
    this._repository = getRepository(entityClass);
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
