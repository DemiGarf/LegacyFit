-- CreateTable
CREATE TABLE "Ejercicios" (
    "Idejercicios" SERIAL NOT NULL,
    "Nombre" TEXT NOT NULL,
    "Descripcion" TEXT NOT NULL,

    CONSTRAINT "Ejercicios_pkey" PRIMARY KEY ("Idejercicios")
);

-- CreateTable
CREATE TABLE "Rutinas" (
    "Idrutinas" SERIAL NOT NULL,
    "Idejercicios" INTEGER NOT NULL,

    CONSTRAINT "Rutinas_pkey" PRIMARY KEY ("Idrutinas")
);
