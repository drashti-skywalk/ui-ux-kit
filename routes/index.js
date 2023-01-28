const user = require("./users");
const membership = require("./memberships");
const design = require("./designs");
const category = require("./category");
const screen = require("./screens");
const rating = require("./ratings");
const cart = require("./carts");
const company_suggestion = require("./company_suggestions");
const order = require("./orders");

const all = [].concat(user, membership, category, design, screen, rating, cart, company_suggestion, order);

module.exports = all;
