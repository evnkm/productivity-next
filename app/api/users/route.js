export async function GET(request) {
    const users = [
        {id: 1, name: "John"},
        {id: 2, name: "Jane"},
        {id: 3, name: "Doe"},
    ]
    return new Response(JSON.stringify(users));
}

// export async function HEAD(request) {

// }

// export async function POST(request) {
//   return new Response("Hello, Next.js!");
// }

// export async function PUT(request) {
//     return new Response("Hello, Next.js!");
// }

// export async function DELETE(request) {
//     return new Response("Hello, Next.js!");
// }

// export async function PATCH(request) {
//     return new Response("Hello, Next.js!");
// }


// export async function OPTIONS(request) {
//     return new Response("Hello, Next.js!");
// }
