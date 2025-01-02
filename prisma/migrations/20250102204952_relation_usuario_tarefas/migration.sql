/*
  Warnings:

  - Added the required column `idUsuario` to the `Tarefas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Tarefas" ADD COLUMN     "idUsuario" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Tarefas" ADD CONSTRAINT "Tarefas_idUsuario_fkey" FOREIGN KEY ("idUsuario") REFERENCES "Usuarios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
