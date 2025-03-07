import express from "express";

// const express = require("express");

let availableItems = fetch('https://dummyjson.com/products').then(res => res.json());

let items = await availableItems;
const app = express();

app.get("/items", (req,res) => {
    res.send(items.products.map((value) => {
        return value.title;
    }));
});
app.post("/items", (req,res) => {
    items.products.push({"title":"item"});
    res.send(items.products.map((value) => {
        return value.title;
    }));
});
app.delete("/items",(req,res) => {
    items = {};
    res.send("items deleted");

});

app.listen(4000, () => 
    {console.log("localhost 4000");}
);