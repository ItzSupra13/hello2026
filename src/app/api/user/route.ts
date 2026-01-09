//Dashboard Endpoint gets the user

import { NextResponse} from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import User from "@/models/user";
import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

export async function GET() {
    try {
        const authToken = (await cookies()).get('authToken')?.value;
        
        if (!authToken) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 });
        }
        
        const decoded: { userId: string} = jwt.verify(
            authToken, 
            process.env.JWT_SECRET!
        ) as { userId: string };

        await connectToDatabase();
        const user = await User.findOne({ _id: decoded.userId }).select('-password -__v');

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 });
        }
        return NextResponse.json(user, { status: 200 });
    } catch{
        // console.log(error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}


