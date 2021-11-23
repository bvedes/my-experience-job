const Contact = require("../Models/contact.model.js");

exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find({}).then((data) => data);
    res.status(200).json({ success: true, data: contacts });
  } catch (error) {
    res.status(404).json({ success: false });
  }
};

exports.addContact = async (req, res) => {
  const contact = new Contact({ ...req.body });
  await contact.save().then(() => res.json({ success: true, data: contact }));
};

exports.updateContact = (req, res) => {
  const { contactId } = req.params;
  console.log("req.body: ", req.body);
  console.log("contactId: ", contactId);
  try {
    Contact.findByIdAndUpdate(
      contactId,
      {
        ...req.body,
      },
      { new: true }
    ).then((data) => res.status(200).json({ success: true, data }));
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(404).send({
        message: `Contact does not exist with contactId: ${contactId}`,
      });
    }
    return res.status(500).send({
      message: `Some error occurred while retrieving the contact with contactId: ${contactId}`,
    });
  }
};
// Delete a contact with the specified contactId
exports.deleteContact = (req, res) => {
  Contact.findByIdAndRemove(req.params.contactId)
    .then((data) => {
      return res.status(200).json({ success: true, data });
    })
    .catch((err) => {
      if (err.kind === "ObjectId" || err.name === "NotFound") {
        return res.status(404).send({
          message: "Contact not found with id " + req.params.contactId,
        });
      }
      return res.status(500).send({
        message: "Could not delete contact with id " + req.params.contactId,
      });
    });
};
