const express = require('express');
const { PrismaClient } = require('@prisma/client');

const router = express.Router();
const prisma = new PrismaClient();

// Ruta para obtener los nombres de todos los ejercicios
router.get('/', async (req, res) => {
  try {
    const ejercicios = await prisma.ejercicios.findMany({
      select: {
        Nombre: true,
      },
    });
    res.json(ejercicios);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching exercises' });
  }
});

module.exports = router;