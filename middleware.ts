import { NextRequest, NextResponse } from "next/server";
import { TOKEN_NAME } from "../ocso-front/src/auth/constants/jwt.constants";
import * as jose from 'jose'

export default async function Middleware(req: NextRequest){
    const token = req.cookies.get(TOKEN_NAME)?.value;
    if(req.nextUrl.pathname.startsWith('/dashboard')){
        if (!token) {
            return NextResponse.redirect(new URL('/login', req.url))
        }
    }

    if (req.nextUrl.pathname.startsWith('/managers')) {
        if(!token){
            return NextResponse.redirect(new URL('/login', req.url))
        }
        try {
            const {payload} = await jose.jwtVerify(token, new TextEncoder().encode(TOKEN_NAME));            
            if (!Array.isArray(payload.userRoles) || !payload.userRoles.includes('Manager') || !payload.userRoles.includes('Admin')) {
                return NextResponse.redirect(new URL('/Home', req.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/Login', req.url));
        }
    }
    if (req.nextUrl.pathname.startsWith('/providers')) {
        if(!token){
            return NextResponse.redirect(new URL('/login', req.url))
        }
        try {
            const {payload} = await jose.jwtVerify(token, new TextEncoder().encode(TOKEN_NAME));            
            if (!Array.isArray(payload.userRoles) || !payload.userRoles.includes('Manager') || !payload.userRoles.includes('Admin')) {
                return NextResponse.redirect(new URL('/Home', req.url));
            }
        } catch (error) {
            return NextResponse.redirect(new URL('/Login', req.url));
        }
    }

    if (req.nextUrl.pathname === '/') {
        return NextResponse.redirect(new URL('/dashboard', req.url))
    }
    return NextResponse.next()
}