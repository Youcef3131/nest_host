-- CreateTable
CREATE TABLE "FjsAlert" (
    "id" SERIAL NOT NULL,
    "context" VARCHAR(255) NOT NULL,
    "date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "FjsAlert_pkey" PRIMARY KEY ("id")
);
