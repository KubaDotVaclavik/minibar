import { Router } from 'express'
import tvrdej from './tvrdej'

const router = Router()

router.use('/tvrdej', tvrdej)

// router.use('/pivo', pivo)

export default router