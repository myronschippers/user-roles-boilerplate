import { Request, Response } from 'express';
import express from 'express';
import rejectUnauthenticated from '../modules/authentication-middleware';
import pool from '../modules/pool';
import userStrategy from '../strategies/user.strategy';
import { encryptPassword } from '../modules/encryption';

const router: express.Router = express.Router();

router.get('/', rejectUnauthenticated, (req: Request, res: Response): void => {
  res.send(req.user);
});

router.get('/roles', (req: Request, res: Response): void => {
  const queryText = `SELECT * FROM roles;`;
  pool
    .query(queryText)
    .then((dbResp) => {
      res.send(dbResp.rows);
    })
    .catch((err) => {
      res.sendStatus(500);
    });
});

router.post(
  '/register',
  (req: Request, res: Response, next: express.NextFunction): void => {
    const username: string | null = <string>req.body.username;
    const password: string | null = encryptPassword(req.body.password);
    const email: string | null = req.body.email;
    const first_name: string | null = req.body.first_name;
    const last_name: string | null = req.body.last_name;

    const queryText: string = `INSERT INTO "user" (username, password, email, first_name, last_name)
    VALUES ($1, $2, $3, $4, $5) RETURNING id`;
    pool
      .query(queryText, [username, password, email, first_name, last_name])
      .then(() => res.sendStatus(201))
      .catch((err) => {
        console.log(`Error saving user to database: ${err}`);
        res.sendStatus(500);
      });
  }
);

router.post(
  '/login',
  userStrategy.authenticate('local'),
  (req: Request, res: Response): void => {
    res.sendStatus(200);
  }
);

router.post('/logout', (req: Request, res: Response): void => {
  req.logout();
  res.sendStatus(200);
});

export default router;
