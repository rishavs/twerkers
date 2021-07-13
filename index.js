import { Router } from 'itty-router'
import { error } from 'itty-router-extras'
import { sayHello } from './app/handlers/misc'

// now let's create a router (note the lack of "new")
const router = Router()

router.get('/hello', () => new Response(
    sayHello()
))

router.post('/read', async req => {
    try {
      const content = await req.json()
      return new Response('Creating Todo: ' + JSON.stringify(content))

      // do something with the content
    } catch (err) {
        console.error(err)
        return new Response('caught errors', { status: 400 })
    }
  })


router.get('/todos', () => new Response('Todos Index!'))

// GET item
router.get('/todos/:id', ({ params }) => new Response(`Todo #${params.id}`))

// POST to the collection (we'll use async here)
router.post('/todos', async request => {
  const content = await request.json()

  return new Response('Creating Todo: ' + JSON.stringify(content))
})

// 404 for everything else
router.all('*', () => new Response('Strange errors', { status: 500 }))

// attach the router "handle" to the event handler
addEventListener('fetch', event =>
  event.respondWith(router.handle(event.request))
)