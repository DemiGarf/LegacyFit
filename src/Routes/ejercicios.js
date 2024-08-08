import { Router } from 'express';
import { PrismaClient } from '@prisma/client';

const router = Router();
const prisma = new PrismaClient();

router.get('/', async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicios.findMany();
    res.json(ejercicios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener los nombres de los ejercicios' });
  }
});

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
router.get('/descripcion/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const idNum = parseInt(id, 10);
    const ejercicio = await prisma.ejercicios.findUnique({
      where: {
        Idejercicios: idNum,
      },
    }); 

    if (!ejercicio) {
      return res.status(404).json({ error: 'Ejercicio no encontrado' });
    }

    res.json(ejercicio);
  } catch (error) {
    console.error('Error al obtener la descripción del ejercicio:', error);
    res.status(500).json({ error: 'Error al obtener la descripción del ejercicio' + error });
  }
});
router.get('/Alternative/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const idNum = parseInt(id, 10);
    const ejercicio = await prisma.ejercicios.findUnique({
      where: {
        Idejercicios: idNum,
      },
      select: {
        Alternative: true,
      },
    });

    if (!ejercicio || !ejercicio.Alternative) {
      return res.status(404).json({ error: 'Ejercicio o columna Alternative no encontrado' });
    }

    res.json(ejercicio);
  } catch (error) {
    console.error('Error al obtener la columna Alternative del ejercicio:', error);
    res.status(500).json({ error: 'Error al obtener la columna Alternative del ejercicio' + error });
  }
});