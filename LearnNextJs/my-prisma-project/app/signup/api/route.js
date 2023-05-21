import prisma from '@/config/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try { 
        console.log('====================================');
        console.log("req", req);
        console.log('====================================');
        const result = await prisma.user.create({
           name: req.body.name,
            email: req.body.email
        })
        console.log('====================================');
        console.log("result", result);
        console.log('====================================');
        return NextResponse.json(result);
    } catch (error) {
        console.log('=========error===========================');
        console.log(error);
        console.log('====================================');
        return NextResponse.json({
            error: "something went wrong"
        });
    }
  
}