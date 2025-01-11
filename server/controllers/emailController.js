const Category = require("../models/Category");
const Email = require("../models/Email");

const getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories." });
  }
};

const addCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json(category);
  } catch (error) {
    res.status(500).json({ error: "Failed to add category." });
  }
};

const removeCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ error: "Category not found." });
    }
    res.status(200).json({ message: "Category removed successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove category." });
  }
};

const getEmails = async (req, res) => {
  try {
    const {categoryId} = req.params;
    const emails = await Email.find({categoryId});
    if(!emails || emails.length === 0) {
      return res.status(404).json({ error: "Emails not found." });
    }
    res.status(200).json(emails);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch emails." });
  }
};

const addEmail = async (req, res) => {
  try {
    const categoryId = req.params.categoryId;
    const { email, description } = req.body;
    const newemail = await Email.create({ categoryId, email, description });
    res.status(200).json(newemail);
  } catch (error) {
    res.status(500).json({ error: "Failed to add email." });
  }
};

const removeEmail = async (req, res) => {
  try {
    const {categoryId, emailId} = req.params;
    const email = await Email.findOneAndDelete({_id: emailId, categoryId});
    if (!email) {
      return res.status(404).json({ error: "Email not found or does not belong to this category." });
    }
    res.status(200).json({ message: "Email removed successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove email." });
  }
};

module.exports = {
  getCategories,
  addCategory,
  removeCategory,
  getEmails,
  addEmail,
  removeEmail,
};
