-- CreateTable
CREATE TABLE "LoginSystem" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "mail" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoginSystem_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LoginSystem_username_key" ON "LoginSystem"("username");

-- CreateIndex
CREATE UNIQUE INDEX "LoginSystem_mail_key" ON "LoginSystem"("mail");
