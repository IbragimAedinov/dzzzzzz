const {
  sendAllGames,
  sendGameCreated,
  sendGameById,
  SendGameUpdated,
  sendGameDeleted,
} = require("../controllers/games");
const { checkAuth } = require("../middllewares/auth");

const {
  findAllGames,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvaliable,
  checkIfUsersAreSafe,
  checkIsGameExists,
  checkIsVoteRequest,
} = require("../middllewares/games");

const { createGame } = require("../middllewares/games");
const gamesRouter = require("express").Router();
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.delete("/games/:id", checkAuth, deleteGame, sendGameDeleted);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  SendGameUpdated
);
module.exports = gamesRouter;
