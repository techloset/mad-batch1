import prisma from '@/config/prismaClient';
import { NextResponse } from 'next/server';

export async function POST(req) {
    try { 
        const data = await req.json()
        console.log('====================================');
        console.log("req", data);
        console.log('====================================');
        const result = await prisma.user.create({data: {
           name: data.name,
            email: data.email}
        })
        console.log('====================================');
        console.log("result", result);
        console.log('====================================');
        return  NextResponse.json(result,{status:200});
    } catch (error) {
        console.log('=========error===========================');
        console.log(error);
        console.log('====================================');
        return NextResponse.json({
            error: "something went wrong"
        },{status: 500});
    }
  
}