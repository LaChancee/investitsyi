import { Prisma, PrismaClient } from '@prisma/client';
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient();
async function main() {
  let users: Prisma.UserCreateInput[] =  [{
    name : faker.name.lastName(),
    first_name: faker.name.firstName(),
    pseudo_name: faker.random.word(),
    profile_picture: faker.internet.avatar(),
    password: "Mdp1234",
    email: faker.internet.email(),
    address: faker.address.streetAddress(),
    zipcode: faker.address.zipCode(),
    town: faker.address.cityName(),
    subtype: true,
    usertype: faker.name.jobTitle(),
  }]
  await Promise.all(
    users.map(async (user) => {
      await prisma.user.create({
        data: user,
      })
    })
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

main();





























// import { PrismaClient } from '@prisma/client'
// import { faker } from '@faker-js/faker';


// const prisma = new PrismaClient()
// const data = Array.from({ length: 50 }).map(()=>({
//     name : faker.name.lastName(),
//     first_name: faker.name.firstName(),
//     pseudo_name: faker.random.word(),
//     profile_picture: faker.internet.avatar(),
//     email: faker.internet.email(),
//     address: faker.address.streetAddress(),
//     zipcode: faker.address.zipCode(),
//     town: faker.address.cityName(),
//     subtype: faker.datatype.number({min:1, max:2}),
//     usertype: faker.name.jobTitle(),
//     posts: {
//             create: {
//                 title: 'Investissez à fond',
//                 content: 'Venez investir svp !',
//                 published: true,
//             },
//     },
//     Profile: {
//         create: {
//             bio : faker.lorem.sentences(),
//         }
//     }    


// }))

// async function main() {
//   await prisma.user.create({
//     data
//   });
  
// }
// main()
//   .then(async () => {
//     await prisma.$disconnect()
//   })
//   .catch(async (e) => {
//     console.error(e)
//     await prisma.$disconnect()
//     process.exit(1)
//   })