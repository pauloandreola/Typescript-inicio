import { Request, Response } from 'express';

const users = [{name: 'Paulo' , email: 'paulo@gmail.com'}];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  }
};