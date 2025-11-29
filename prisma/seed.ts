import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  // Merchant
  const merchant = await prisma.merchant.create({
    data: {
      name: "Demo Merchant",
      subdomain: "demo",
      plan: "FREE",
    },
  });

  // User
  const user = await prisma.user.create({
    data: {
      name: "Admin Demo",
      email: "admin@demo.com",
      password: "hashedpassword", // nanti hash dengan bcrypt
      role: "ADMIN",
      merchantId: merchant.id,
    },
  });

  // Categories
  const drinksCategory = await prisma.category.create({
    data: {
      name: "Drinks",
      merchantId: merchant.id,
    },
  });

  const foodsCategory = await prisma.category.create({
    data: {
      name: "Foods",
      merchantId: merchant.id,
    },
  });

  // Custom Fields
  await prisma.customField.createMany({
    data: [
      {
        name: "Volume",
        type: "NUMBER",
        required: true,
        merchantId: merchant.id,
        categoryId: drinksCategory.id,
      },
      {
        name: "Spice Level",
        type: "SELECT",
        required: false,
        merchantId: merchant.id,
        categoryId: foodsCategory.id,
      },
    ],
  });

  // Products
  const coffee = await prisma.product.create({
    data: {
      title: "Iced Coffee",
      price: 15000,
      description: "Cold refreshing coffee",
      merchantId: merchant.id,
      categoryId: drinksCategory.id,
    },
  });

  // ProductCustomData
  const volumeField = await prisma.customField.findFirst({
    where: { name: "Volume", merchantId: merchant.id },
  });

  if (volumeField) {
    await prisma.productCustomData.create({
      data: {
        productId: coffee.id,
        customFieldId: volumeField.id,
        value: "250",
      },
    });
  }

  console.log("Seeder berhasil dijalankan!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => await prisma.$disconnect());
