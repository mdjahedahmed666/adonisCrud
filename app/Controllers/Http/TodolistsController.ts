import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";

import Database from "@ioc:Adonis/Lucid/Database";
import Todolist from "App/Models/Todolist";

export default class TodolistsController {
  async getAllToDo() {
    // return Todolist.all();
    const items = await Database.from("todolists").select("*");
    return items;
  }

  async getSingleListItem({ params }: HttpContextContract) {
    return Todolist.query().where("id", params.id).first();
  }

  //Sorting
  async getOrderedItem() {
    return Database.from("todolists").select("*").orderBy("id", "asc");
  }

  //Inserting Row
  async insertRow() {
    const multiInsert = await Database.table("todolists").multiInsert([
      { task_name: "sleeping", is_done: 1 },
      { task_name: "watching", is_done: 1 },
    ]);
    return multiInsert;
    // const newInsert = await Database.table("todolists").insert({
    //   task_name: "studying",
    //   is_done: 1,
    // });

    // const newInsert = await Database.insertQuery()
    //   .table("todolists")
    //   .insert({ task_name: "studying", is_done: 0 });
    // return newInsert;
  }

  //Udating
  async updating() {
    const updated = await Database.from("todolists")
      .where("id", 1)
      .update({ task_name: "complete class" });
    return updated;
  }

  //Deleting
  async deleting() {
    const deleted = await Database.from("todolists").where("id", 5).delete();
    return deleted;
  }

  //Assigned Task
  async crudInsert() {
    const todolist = new Todolist();
    // Assign username and email
    todolist.task_name = "waliking";
    todolist.is_done = 1;

    // Insert to the database
    await todolist.save();

    // const todolist = await User.create({
    //     task_name : "waliking",
    //     is_done : 1,
    //   })

    //adding multi user
    const multiUser = await Todolist.createMany([
      {
        task_name: "talking",
        is_done: 1,
      },
      {
        task_name: "talking",
        is_done: 1,
      },
    ]);
  }

  //Deleting
  async basicOperation() {
    const item = await Todolist.find(1);
    // return item;
    const item2 = await Todolist.findBy("task_name", "waliking");
    // return item2;
    const item3 = await Todolist.first();
    // return item3;
    const item4 = await Todolist.findOrFail(1);
    // return item4;

    const item5 = await Todolist.query().where("task_name", "talking");
    // return item5;

    // Updating
    // await Todolist.query().where("id", 2).update({ is_done: 1 });

    //Delete
    const item6 = await Todolist.findOrFail(14);
    await item6.delete();
  }
}
