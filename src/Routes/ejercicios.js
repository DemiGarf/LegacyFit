import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Endpoint para obtener todos los nombres de la tabla Ejercicios
router.get('/nombres', async (req, res) => {
  
});

// Endpoint para obtener la descripción de un ejercicio por su nombre


export default router;