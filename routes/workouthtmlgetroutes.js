const router = require('express').Router();
const path = require('path');
/* route for exercise.html */

router.get('/exercise', (req, res) => {

    res.sendFile(path.join(__dirname, '../public/exercise.html'));
  
  });
  
  /* route for stats.html */
  
  router.get('/stats', (req, res) => {
  
    res.sendFile(path.join(__dirname, '../public/stats.html'));
    //const Exercise = mongoose.model('Exercise', exerciseSchema)
    
  });
  module.exports = router;
