// backend/src/middleware/authMiddleware.js
// eslint-disable-next-line import/no-unresolved
import { verify } from 'jsonwebtoken';

// eslint-disable-next-line import/no-unresolved
require('dotenv').config();

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Unauthorized' });

  verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Forbidden' });
    req.user = user;
    next();
  });
};

export default {
  authenticateToken,
};
