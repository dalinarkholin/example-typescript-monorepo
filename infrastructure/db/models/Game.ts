import {
  Column, DeletedAt, BelongsToMany, Sequelize,
  Table,
} from "sequelize-typescript";

import User from "./User";
import UserGame from "./UserGame";
import BaseModel from "./BaseModel";

@Table({
  tableName: "games",
})
export default class Game extends BaseModel<Game> {

  @Column({allowNull: false})
  public title: string;

  @Column({allowNull: false})
  public description: string;

  @Column({allowNull: true})
  public author: string;

  @Column({allowNull: true})
  public genre: string;

  @Column({allowNull: true})
  public downloadUrl: string;

  @Column({allowNull: true})
  public status: string;

  @BelongsToMany(() => User, () => UserGame, "game_id", "user_id")

  @DeletedAt
  @Column({type: Sequelize.DATE})
  public deletedAt: Date | null;

}