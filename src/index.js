const express = require('express');
const { PrismaClient } = require('@prisma/client');
const { createClient } = require('@supabase/supabase-js');
const userRoutes = require('./routes/users');

const app = express();
const prisma = new PrismaClient();

const supabaseUrl = process.env.SUPABASE_URL || 'https://yourpostgres://postgres.jbnqlmrwypswfrtaflrm:Legacy2%3A%29%23%2Fla@aws-0-sa-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true-supabase-url.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'Legacy2:)#la';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());

// Usar las rutas de usuarios
app.use('/user', userRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});