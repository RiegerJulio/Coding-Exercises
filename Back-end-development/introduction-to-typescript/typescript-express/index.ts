import express, { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

const app = express();

app.use(express.json());

const PORT = 3000;

app.get('/', (req: Request, res: Response) => {
  res.status(StatusCodes.OK).send('Hello World!');
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  const { name, message, details } = err as any;

  switch (name) {
    case 'ValidationError':
      res.status(StatusCodes.BAD_REQUEST).json({ message: details.message });
      break;
    case 'NotFoundError':
      res.status(StatusCodes.NOT_FOUND).json({ message });
      break;
    case 'ConflictError':
      res.status(StatusCodes.CONFLICT).json({ message });
      break;
    default:
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message });
  }
  next();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
