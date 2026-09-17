<?php

namespace App\Controllers;

use App\Controllers\BaseController;
use App\Models\UserModel;
use CodeIgniter\HTTP\ResponseInterface;

class AuthController extends BaseController
{
    public function register()
    {
        $data = $this->request->getJSON(true);

        if (!$data) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Invalid request data',
            ])->setStatusCode(400);
        }

        // Validation
        if (
            empty($data['name']) ||
            empty($data['email']) ||
            empty($data['password'])
        ) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Name, email and password are required',
            ])->setStatusCode(400);
        }

        $userModel = new UserModel();

        // Check existing email
        $existingUser = $userModel
            ->where('email', $data['email'])
            ->first();

        if ($existingUser) {
            return $this->response->setJSON([
                'success' => false,
                'message' => 'Email already registered',
            ])->setStatusCode(409);
        }

        // Hash password
        $hashedPassword = password_hash(
            $data['password'],
            PASSWORD_DEFAULT
        );

        $userData = [
            'name'     => $data['name'],
            'email'    => $data['email'],
            'password' => $hashedPassword,
        ];

        $userModel->insert($userData);

        return $this->response->setJSON([
            'success' => true,
            'message' => 'Registration successful',
        ])->setStatusCode(201);
    }
}
