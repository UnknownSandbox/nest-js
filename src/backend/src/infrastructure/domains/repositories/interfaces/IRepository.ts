export interface IRepository<Entity> {

  getById(id: number);

  findAll();

  count();

  create(entity: Entity);

  update(entity: Entity);

  remove(id: number);

}
