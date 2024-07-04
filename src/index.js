import express from 'express';
import { PrismaClient } from '@prisma/client';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import userRoutes from './Routes/user.js';
import ejerciciosRoutes from './Routes/ejercicios.js'

const app = express();
const prisma = new PrismaClient();

const supabaseUrl = process.env.SUPABASE_URL || 'https://yourpostgres://postgres.jbnqlmrwypswfrtaflrm:Legacy2%3A%29%23%2Fla@aws-0-sa-east-1.pooler.supabase.com:5432/postgres?pgbouncer=true-supabase-url.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || 'Legacy2:)#la';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(express.json());
app.use(cors());

// Usar las rutas de usuarios
//app.use('/user', userRoutes);

app.use('/ejercicios', ejerciciosRoutes);

// Iniciar el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});