import { Request, Response } from 'express';
import EmailService from '../services/emailServices';

const users = [{name: 'Paulo' , email: 'paulo@gmail.com'}];

export default {
  async index(req: Request, res: Response) {
    return res.json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();

    emailService.sendMail({
      to: {
        name: 'Paulo Andreola', email: 'paulo@gmail.com'
      },
      message: {
        subject: 'Bem vindo ao sistema', body: 'Seja bem vindo ao typescript'
      }
    });

    return res.send();
  }
};