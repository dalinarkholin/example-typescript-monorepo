import {Column, CreatedAt, Model, Sequelize, UpdatedAt} from "sequelize-typescript";

abstract class BaseModel<T> extends Model<T> {
  @CreatedAt
  @Column({type: Sequelize.DATE})
  public createdAt: Date;

  @UpdatedAt
  @Column({type: Sequelize.DATE})
  public updatedAt: Date;
}

export default BaseModel;
