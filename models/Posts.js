var mongoose = require('mongoose');

/* Post Schema */
var PostSchema = new mongoose.Schema({
	title: String,
	link: String,
	upvotes: {type: Number, default: 0},
	comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment '  }]
});

/* Upvote Method */
PostSchema.methods.upvote = function(cb) {
  this.upvotes += 1;
  this.save(cb);
};

mongoose.model('Post', PostSchema);