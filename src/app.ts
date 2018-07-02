import * as Koa from 'koa'
import * as Router from 'koa-router'
import { Utility as Ut } from './lib'

const app = new Koa()
const router = new Router()
const port = 3000

// x-response-time
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// logger
app.use(async (ctx, next) => {
  const start = Date.now()
  await next()
  const ms = Date.now() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}`)
})

// response
// http://lvh.me:3000/?delay=3000
router.get('/', async (ctx) => {
  // tslint:disable-next-line: no-unsafe-any
  const delay = parseInt(ctx.query.delay, 10)
  if (!isNaN(delay)) {
    await Ut.Delay(delay)
    ctx.body = `<h2>Delayed ${delay} ms</h2>`
  } else {
    ctx.body = '<h1>Hello World!</h1>'
  }
})

app.use(router.routes())
app.listen(port)
console.log(`Server listen on ${port}`)
