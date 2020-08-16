import { Request, Response } from "express";
import EmailService from "../services/Email.service";

const users = [{ name: "Gabriel", email: "gabriel@email.com" }];

export default {
  async index(req: Request, res: Response) {
    return res.status(200).json(users);
  },

  async create(req: Request, res: Response) {
    const emailService = new EmailService();
    emailService.sendMail({
      to: { name: "Gabriel Santos", email: "gabriel@email.com" },
      message: { subject: "Bem vindo ao sistema", body: "Seja bem-vindo" }
    });

    return res.status(200).send("Email Enviado!");
  }
};
