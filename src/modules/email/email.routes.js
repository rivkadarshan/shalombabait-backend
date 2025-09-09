import express from 'express';
import { sendEmailController } from './email.controller.js';

const router = express.Router();

router.post('/send-email', sendEmailController);

export default router;