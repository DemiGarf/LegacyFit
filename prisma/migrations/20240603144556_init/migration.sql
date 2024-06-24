-- CreateTable
CREATE TABLE "Usuario" (
    "IdUsuario" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Apellido" TEXT NOT NULL,
    "Mail" TEXT NOT NULL,

    CONSTRAINT "Usuario_pkey" PRIMARY KEY ("IdUsuario")
);
