import { Request, Response, Router } from "express"
import * as multer from "multer"

export function FileController(): Router {
  const storage = multer.diskStorage({
    destination: "public/img/",
    filename: (req: Request, file: Express.Multer.File, cb: (err: Error | null, filename: string) => void) => {
      cb(null, file.originalname)
    }
  })
  const upload = multer({ storage })
  const router: Router = Router()

  router.post("/", (req: Request, res: Response) => {
    upload.array("files", 12)(req, res, (err) => {
      if (err) {
        console.log(err)
      }

      // req.files is array of `photos` files
      // req.body will contain the text fields, if there were any
      console.log(req.files, req.body)
      res.json(filesReponse(req.files as Express.Multer.File[]))
    })
  })

  function filesReponse(files: Express.Multer.File[]) {
    return files.map((file, idx) => ({
      file_id: idx,
      file_name: file.originalname,
      confidence: idx % 2 === 0 ? 89 : 100
    }))
  }

  return router
}
