import Database from "@ioc:Adonis/Lucid/Database";
import Route from "@ioc:Adonis/Core/Route";

// Route.get("/", async ({ view }) => {
//   return view.render("welcome");
// });
Route.get("/getAllToDo", "TodolistsController.getAllToDo");
Route.get("/getSingleListItem/:id", "TodolistsController.getSingleListItem");

Route.get("todolists", async () => {
  return Database.from("todolists").select("*");
});

Route.get("/getOrderedItem", "TodolistsController.getOrderedItem");

Route.get("/insertRow", "TodolistsController.insertRow");

Route.get("/updating", "TodolistsController.updating");

Route.get("/deleting", "TodolistsController.deleting");

Route.get("/transcations", "TodolistsController.transcations");

// Assigned task
Route.get("/crudInsert", "TodolistsController.crudInsert");

Route.get("/basicOperation", "TodolistsController.basicOperation");
