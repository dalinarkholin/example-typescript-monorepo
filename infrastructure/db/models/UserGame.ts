import {
  BelongsTo, Column, DeletedAt, Sequelize,
  Table,
} from "sequelize-typescript";

import BaseModel from "./BaseModel";
import User from "./User";
import Game from "./Game";

@Table({
  tableName: "users_games",
  paranoid: true,
})
class UserGame extends BaseModel<UserGame> {

  @BelongsTo(() => User, {
    foreignKey: "user_id",
  })

  @BelongsTo(() => Game, {
    foreignKey: "game_id",
  })

  @DeletedAt
  @Column({type: Sequelize.DATE})
  public deletedAt: Date | null;

}

export default UserGame;
