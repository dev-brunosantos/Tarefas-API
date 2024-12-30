-- CreateTable
CREATE TABLE "Tarefas" (
    "id" TEXT NOT NULL,
    "tarefa" TEXT NOT NULL,
    "dtCriacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "dtAtualizacao" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Tarefas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Tarefas_tarefa_key" ON "Tarefas"("tarefa");
