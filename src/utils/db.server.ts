import { PrismaClient } from '@prisma/client';
export type { User, Plant, Log } from '@prisma/client';
``;
const prisma = new PrismaClient();
export default prisma;
