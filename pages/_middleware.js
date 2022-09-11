// middleware.ts
import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(NextRequest) {
  return NextResponse.next({ title: "Spesana 8B" })
}
