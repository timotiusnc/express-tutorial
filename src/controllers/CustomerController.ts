import { Request, Response, Router } from "express"

import { CustomerRepository } from "../repository/CustomerRepository"

export function CustomerController(repo: CustomerRepository): Router {
    const router: Router = Router()

    router.get("/:customer_id", (req: Request, res: Response) => {
        const { customer_id } = req.params
        console.log(req.body, req.params)
        res.json(repo.getCustomer(customer_id))
    })

    return router
}
