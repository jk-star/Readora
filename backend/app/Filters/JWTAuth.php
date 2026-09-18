<?php

namespace App\Filters;

use CodeIgniter\Filters\FilterInterface;
use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use Firebase\JWT\JWT;
use Firebase\JWT\Key;

class JWTAuth implements FilterInterface
{
    public function before(
        RequestInterface $request,
        $arguments = null
    ) {
        $authHeader = $request->getHeaderLine('Authorization');

        if (empty($authHeader)) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Authorization token is required',
                ])
                ->setStatusCode(401);
        }

        if (!preg_match('/Bearer\s(\S+)/', $authHeader, $matches)) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Invalid authorization format',
                ])
                ->setStatusCode(401);
        }

        $token = $matches[1];

        try {
            $secretKey = env('JWT_SECRET_KEY');

            if (empty($secretKey)) {
                return service('response')
                    ->setJSON([
                        'success' => false,
                        'message' => 'JWT secret key is not configured',
                    ])
                    ->setStatusCode(500);
            }

            $decoded = JWT::decode(
                $token,
                new Key($secretKey, 'HS256')
            );

            // Store decoded JWT data in the request
            $request->jwtPayload = $decoded;
        } catch (\Exception $e) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Invalid or expired token',
                ])
                ->setStatusCode(401);
        }

        return $request;
    }

    public function after(
        RequestInterface $request,
        ResponseInterface $response,
        $arguments = null
    ) {
        // Nothing required here
    }
}
