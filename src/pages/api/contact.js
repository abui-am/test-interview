import { cors } from '@/utils/middlewares';
import { v4 } from 'uuid';
import fs from 'fs';

export default async (req, res) => {
  await cors(req, res);

  if (req.method === 'POST') {
    const { fullName, email, message } = req.body;

    let id = v4();
    const createdAt = new Date().toISOString();

    try {
      fs.writeFile(`messages/${id}.txt`, JSON.stringify({ fullName, email, message, createdAt }));
      res.status(200).json({ message: 'berhasil' });

      res.end();
    } catch (e) {
      res.status(500).json({ message: e });
      res.end();
    }
  }
};
