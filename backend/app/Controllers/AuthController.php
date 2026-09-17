<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;
use Firebase\JWT\JWT;

class AuthController extends BaseController
{
    public function register()
    {
        $data = $this->request->getJSON(true);

        if (
            empty($data['name']) ||
            empty($data['email']) ||
            empty($data['password'])
        ) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'All fields are required',
            ])->setStatusCode(400);
        }

        $userModel = new UserModel();

        $existingUser = $userModel
            ->where('email', $data['email'])
            ->first();

        if ($existingUser) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Email already registered',
            ])->setStatusCode(409);
        }

        $hashedPassword = password_hash(
            $data['password'],
            PASSWORD_DEFAULT
        );

        $userData = [
            'name' => $data['name'],
            'email' => $data['email'],
            'password' => $hashedPassword,
        ];

        $userModel->insert($userData);

        return $this->response->setJSON([
            'success' => true,
            'message' => 'Registration successful',
        ])->setStatusCode(201);
    }

    public function login()
    {
        $data = $this->request->getJSON(true);

        if (
            empty($data['email']) ||
            empty($data['password'])
        ) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Email and password are required',
            ])->setStatusCode(400);
        }

        $userModel = new UserModel();

        $user = $userModel
            ->where('email', $data['email'])
            ->first();

        if (!$user) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Invalid email or password',
            ])->setStatusCode(401);
        }

        if (!password_verify($data['password'], $user['password'])) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Invalid email or password',
            ])->setStatusCode(401);
        }

        // JWT secret key
        $secretKey = getenv('JWT_SECRET_KEY');

        // JWT payload
        $payload = [
            'iss' => 'readora',
            'iat' => time(),
            'exp' => time() + (60 * 60 * 24),
            'user_id' => $user['id'],
            'email' => $user['email'],
        ];

        // Generate JWT token
        $token = JWT::encode(
            $payload,
            $secretKey,
            'HS256'
        );

        return $this->response->setJSON([
            'success' => true,
            'message' => 'Login successful',
            'token' => $token,
            'user' => [
                'id' => $user['id'],
                'name' => $user['name'],
                'email' => $user['email'],
            ],
        ])->setStatusCode(200);
    }
}
