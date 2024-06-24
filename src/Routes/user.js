const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');

const router = express.Router();
const prisma = new PrismaClient();

const supabaseUrl = process.env.SUPABASE_URL || 'https://yourpostgres://postgres.jbnqlmrwypswfrtaflrm:Legacy2%3A%29%23%2Fla@aws-0-sa-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true-supabase-url.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'Legacy2:)#la';
const supabase = createClient(supabaseUrl, supabaseKey);

// Ruta para obtener usuarios
router.get('/', async (req, res) => {
  try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
});

// Ruta para crear un usuario
router.post('/', async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await prisma.user.create({
      data: { name, email },
    });

    // También puedo hacer algo con Supabase aca
    // const { data, error } = await supabase
    //   .from('your-table')
    //   .insert([{ name, email }]);

    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

router.get('/ejercicios', async (req, res) => {
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

export default router;