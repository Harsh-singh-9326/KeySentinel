-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "Username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "user_Username_key" ON "user"("Username");
