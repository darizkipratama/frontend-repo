import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const response = await axios.put('http://localhost:3000/api/users', req.body, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'bearer $impleTok3N'
        }
      });

      
      res.status(201).json(response);
    } catch (error) {
      res.status(500).json({ message: 'Error saving data', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
