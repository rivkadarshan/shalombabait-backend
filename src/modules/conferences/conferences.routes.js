// const conferences = [
//   {
//     title: 'כנס ניסן תשפא',
//     speakers: [
//       { name: 'הרב אילן', videoId: 'https://www.youtube.com/watch?v=bF26OhfPti4' },
//       { name: 'הרב רזיאל', videoId: 'https://www.youtube.com/watch?v=bF26OhfPti4' }
//     ]
//   },
//   {
//     title: 'כנס ניסן תשפב',
//     speakers: [
//       { name: 'הרב סילבר', videoId: 'https://www.youtube.com/watch?v=bF26OhfPti4' },
//       { name: 'הרב כהן', videoId: 'https://www.youtube.com/watch?v=bF26OhfPti4' }
//     ]
//   }
// ];
// import express from 'express';

// const router = express.Router();

// router.get('/conferences', conferences);

// export default router;
import express from 'express';

const router = express.Router();

const conferences = [
  {
    title: 'כנס ניסן תשפא',
    speakers: [
      { name: 'הרב אילן', videoId: 'watch?v=bF26OhfPti4' },
      { name: 'הרב רזיאל', videoId: 'watch?v=bF26OhfPti4' }
    ]
  },
  {
    title: 'כנס ניסן תשפב',
    speakers: [
      { name: 'הרב סילבר', videoId: 'watch?v=bF26OhfPti4' },
      { name: 'הרב כהן', videoId: 'watch?v=bF26OhfPti4' }
    ]
  }
];

// החזרת המידע כ־JSON
router.get('/', (req, res) => {
  res.json(conferences);
});

export default router;
