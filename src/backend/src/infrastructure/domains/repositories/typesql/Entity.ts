import {PrimaryGeneratedColumn, Entity as ORMEntityDecorator, Column} from "typeorm";
import {IEntity} from "../interfaces/IEntity";
import {DTO} from "../../DTO";

@ORMEntityDecorator()
export abstract class Entity implements IEntity {

  abstract createFromDTO(dto: DTO);

  abstract castToDTO();

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  createDate: Date;

  @Column()
  updateDate: Date;

}
