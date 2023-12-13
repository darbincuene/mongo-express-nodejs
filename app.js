import  Express  from 'express'
import shirt_list_routes from './routers/shirt_list.js'
// import shirt_brand_routes from './routers/shirt_brand.js'

const app = Express()

// settings
app.set('port', process.env.PORT || 4000)

// middleware
app.use(Express.json())
app.use(Express.urlencoded({extended: true}))

// routes
app.use('/api/shirt_list', shirt_list_routes)
// app.use('/api/shirt_brand', shirt_brand_routes)

export default app