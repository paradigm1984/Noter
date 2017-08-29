const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");;

// Requiring the note model
const Note = require("../models/note.js")

router.use(bodyParser.json());
router.use(bodyParser.json({ type: 'application/vnd.api+json' }));
router.use(bodyParser.urlencoded({ extended: true }));

// Get Homepage
router.get("/", function (req, res) {
  res.render("index");
});

// Add a note to the DB
router.post("/noteslist/", function (req, res, error) {
	if(error) {
		throw error;
	}

	Note.findOne({title: result.title}, function(error, data) {
		if(error) {
			throw error;
		} else {
			if(data == null) {
				var note = new Note(result);
				article.save(function(error, record) {
					if(error) {
						throw error;
					} 
					console.log("record was added");
				});
			} else {
				console.log("no record was added because it already exists.");
			}
		}
		console.log("addition completed.");
	})

  res.redirect("index");
});

module.exports = router;


/* 8/28/2017 10:28 am
the handlebars template works on the server. run the script npm run watch. at this point you should
plan out exactly what your app is going to look like. 
things to do:
* connect the mongdb database XXX
* style handlebars pages
* create models for whatever has to be saved to the db
* set up webpack to combine all the javascript
*/