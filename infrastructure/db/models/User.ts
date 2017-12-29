import {
  Column, DeletedAt, IsEmail, BelongsToMany, Sequelize,
  Table,
} from "sequelize-typescript";

import Game from "./Game"
import UserGame from "./UserGame";
import BaseModel from "./BaseModel";

@Table({
  tableName: "users",
})
export default class User extends BaseModel<User> {

  @Column({allowNull: false})
  public sub: string;

  @IsEmail
  @Column({allowNull: false, unique: true})
  public email: string;

  @Column({allowNull: false, unique: true})
  public username: string;

  @Column({allowNull: false})
  public acceptedCurrentTermsOfService: boolean;

  @BelongsToMany(() => Game, () => UserGame, "user_id", "game_id")

  @DeletedAt
  @Column({type: Sequelize.DATE})
  public deletedAt: Date | null;

}
