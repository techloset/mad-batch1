import prisma from '@/config/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try { 
       const body = await req.json()
       console.log("body", body);
       const { name, cookingTime, difficultyLevel, instructions } = body;
       const recipe = await prisma.recipes.create({
        data: {
          userId: "64730c69c537324fa1b66040",
          name,
          cookingTime: parseInt(cookingTime),
          difficultyLevel,
          instructions: {
            create: instructions.map((description) => ({
              description,
            })),
          },
        },
        include: {
          instructions: true,
        },
      });
  
        console.log('====================================');
        console.log("result", recipe);
        console.log('====================================');
        return NextResponse.json(recipe);
    } catch (error) {
        console.log('=========error===========================');
        console.log(error);
        console.log('====================================');
        return NextResponse.json({
            error: "something went wrong"
        });
    }
  
}