import { Request, Response, NextFunction } from 'express'
import HttpException from './HttpException'

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
	console.log('\x1b[33m%s\x1b[0m', error) // 노란색으로 에러 로그 출력
	const status = error.status || 500
	res.status(status).json({
		status: status,
		message: error.message,
	})
}

export { errorMiddleware }
