import { NextResponse, NextRequest } from "next/server";
import jwt from "jsonwebtoken";

interface AuthPayload {
  sub?: string;
  id?: string;
  email?: string;
  adm: boolean;
}

function getTokenFromReq(req: NextRequest): string | null {
  const authHeader = req.headers.get("authorization") ?? "";
  const [type, token] = authHeader.split(" ");
  if (type === "Bearer" && token) return token.trim();

  // fallback: cookie "token"
  const cookie = req.cookies.get("token")?.value;
  return cookie ?? null;
}

function verifyAuth(req: NextRequest): AuthPayload | null {
  const token = getTokenFromReq(req);
  if (!token) return null;
  try {
    return jwt.verify(token, process.env.JWT_SECRET as string) as AuthPayload;
  } catch {
    return null;
  }
}

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (req.method === "OPTIONS") {
    return NextResponse.next();
  }

  if (pathname.startsWith("/api/users")) {
    if (req.method === "POST") {
      return NextResponse.next();
    }
    const auth = verifyAuth(req);
    if (!auth) {
      return NextResponse.json({ error: "Token inválido ou ausente" }, { status: 401 });
    }
    if (!auth.adm) {
      return NextResponse.json({ error: "Acesso negado (somente admin)" }, { status: 403 });
    }
    return NextResponse.next();
  }

  // /api/enrollments e /api/groups: exigem admin para qualquer método
  if (pathname.startsWith("/api/enrollments") || pathname.startsWith("/api/groups")) {
    const auth = verifyAuth(req);
    if (!auth) {
      return NextResponse.json({ error: "Token inválido ou ausente" }, { status: 401 });
    }
    if (!auth.adm) {
      return NextResponse.json({ error: "Acesso negado (somente admin)" }, { status: 403 });
    }
    return NextResponse.next();
  }

  return NextResponse.next();
}

// export const config = {
//   matcher: [
//     "/api/enrollments/:path*",
//     "/api/users/:path*",
//     "/api/groups/:path*",
//   ],
// };
