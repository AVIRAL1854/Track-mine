// // App Router (newer approach)
// // File: app/api/route.ts

// import { NextResponse } from "next/server";

// export async function GET() {
//   return NextResponse.json({ message: "Hello from API route" });
// }

// export async function POST() {
//   return NextResponse.json(
//     { message: "POST request received" },
//     { status: 201 }
//   );
// }

// // This will handle all other HTTP methods
// export async function OPTIONS(request: Request) {
//   return NextResponse.json(
//     {},
//     {
//       status: 204,
//       headers: {
//         Allow: "GET, POST",
//       },
//     }
//   );
// }











// // pages routing old
// // Pages Router (older approach)
// // File: pages/api/[id].ts

// import type { NextApiRequest, NextApiResponse } from 'next'

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   // Access headers
//   const authHeader = req.headers.authorization

//   // Access query parameters
//   const { page, limit } = req.query

//   // Access route parameters
//   const { id } = req.query

//   // Access body (for POST/PUT requests)
//   const body = req.body

//   if (req.method === 'GET') {
//     res.status(200).json({ 
//       message: 'Hello from API route',
//       id,
//       page,
//       limit,
//       authHeader
//     })
//   } else if (req.method === 'POST') {
//     res.status(201).json({ 
//       message: 'Data received',
//       data: body
//     })
//   } else {
//     res.status(405).end(`Method ${req.method} Not Allowed`)
//   }
// }

// // App Router (newer approach)
// // File: app/api/[id]/route.ts

// import { NextRequest, NextResponse } from 'next/server'

// export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
//   // Access headers
//   const authHeader = request.headers.get('authorization')

//   // Access query parameters
//   const searchParams = request.nextUrl.searchParams
//   const page = searchParams.get('page')
//   const limit = searchParams.get('limit')

//   // Access route parameters
//   const { id } = params

//   return NextResponse.json({ 
//     message: 'Hello from API route',
//     id,
//     page,
//     limit,
//     authHeader
//   })
// }

// export async function POST(request: NextRequest) {
//   // Access body
//   const body = await request.json()

//   return NextResponse.json({ 
//     message: 'Data received',
//     data: body
//   }, { status: 201 })
// }

// // This will handle all other HTTP methods
// export async function OPTIONS(request: NextRequest) {
//   return NextResponse.json({}, { 
//     status: 204,
//     headers: {
//       'Allow': 'GET, POST'
//     }
//   })
// }