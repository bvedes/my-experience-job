const express = require("express");
const router = express.Router();
const contacts = require("../controllers/contact.controller.js");

// Get all contacts
router.route("/contacts").get(contacts.getAllContacts);

//createContact a new contact
router.route("/addContact").post(contacts.addContact);

//updateContact a contact with contactId
router.route("/contacts/:contactId").put(contacts.updateContact);

// Delete a Contact with contactId
router.route("/contacts/:contactId").delete(contacts.deleteContact);

module.exports = router;
