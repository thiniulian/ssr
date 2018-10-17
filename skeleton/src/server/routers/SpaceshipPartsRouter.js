import { Router } from 'express';

import getSpaceshipParts from '../services/getSpaceshipParts';

const SpaceshipPartsRouter = Router();

SpaceshipPartsRouter.get('*', (req, res) => res
  .send(getSpaceshipParts()));

export default SpaceshipPartsRouter;
