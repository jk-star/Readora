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
        $header = $request->getHeaderLine('Authorization');

        if (!$header) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Authorization token is required',
                ])
                ->setStatusCode(401);
        }

        if (!preg_match('/Bearer\s(\S+)/', $header, $matches)) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Invalid authorization format',
                ])
                ->setStatusCode(401);
        }

        $token = $matches[1];

        try {
            $secretKey = getenv('JWT_SECRET_KEY');

            JWT::decode(
                $token,
                new Key($secretKey, 'HS256')
            );
        } catch (\Exception $e) {
            return service('response')
                ->setJSON([
                    'success' => false,
                    'message' => 'Invalid or expired token',
                ])
                ->setStatusCode(401);
        }
    }

    public function after(
        RequestInterface $request,
        ResponseInterface $response,
        $arguments = null
    ) {
        // Nothing to do after the request
    }
}
