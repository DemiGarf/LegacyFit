import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

// Endpoint para obtener todos los nombres de la tabla Ejercicios
router.get('/nombres', async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicios.findMany({
      select: {
        Nombre: true,
      },
    });
    res.json(ejercicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los nombres de los ejercicios' });
  }
});

export default router;