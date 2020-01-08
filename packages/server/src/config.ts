require('dotenv').config()

const environment = ['NODE_ENV', 'DATABASE', 'PORT']

environment.forEach(name => {
  if (!process.env[name]) {
    throw new Error(`${name}: ${process.env[name]}`)
  }
})

export const NODE_ENV = process.env.NODE_ENV
export const DATABASE = process.env.DATABASE
export const PORT = process.env.PORT
