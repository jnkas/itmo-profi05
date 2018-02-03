var express = require('express');
var router = express.Router();
router.get('/:controler/:action', function(req, res, next) {
	if (req.params.controler === 'user' &&
		req.params.action === 'add') {
		res.send('OK!');
	}else {
		res.sendStatus(404);
	}
});
module.exports = router;