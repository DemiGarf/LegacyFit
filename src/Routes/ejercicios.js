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

// Endpoint para obtener la descripción de un ejercicio por su nombre
router.get('/descripcion/:nombre', async (req, res) => {
  const { nombre } = req.params;
  try {
    const ejercicio = await prisma.ejercicios.findUnique({
      where: {
        Nombre: nombre,
      },
      select: {
        Descripcion: true,
      },
    });

    if (!ejercicio) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.json(ejercicio);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener la descripción del ejercicio' });
  }
});

export default router;