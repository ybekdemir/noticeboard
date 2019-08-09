const express = require('express');
const router = express.Router();

const notices = [
  {
    id: "001",
    title: "First Test Notice",
    content: "Here is some content",
    postedTime: new Date("2019-08-01 11:37:03Z")
  },
  {
    id: "002",
    title: "Second Test Notice",
    content: "Here is some other content",
    postedTime: new Date("2019-08-01 16:21:42Z")
  },
  {
    id: "003",
    title: "Third Test Notice",
    content: "Pat posted this message!",
    postedTime: new Date("2019-08-01 09:48:53Z")
  },
];

/* GET notices listing. */
router.get('/', function(req, res, next) {
  res.json(notices);
});

/* GET specifc notice. */
router.get('/:id', function(req, res, next) {
  const notice = notices.filter(notice => notice.id === req.params.id);
  if (0 === notice.length) {
    res.status(404).send(`Notice "${req.params.id}" not found.`);
  }
  res.json(notice[0]);
});

module.exports = router;
