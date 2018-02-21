import {DTO} from "../../DTO";

export interface IEntity{
  castToDTO();
  createFromDTO(dto: DTO);
}
