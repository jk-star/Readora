<?php

use CodeIgniter\Router\RouteCollection;

/** @var RouteCollection $routes */
$routes->get('/', 'Home::index');
$routes->post('api/register', 'AuthController::register');
$routes->post('api/login', 'AuthController::login');

$routes->options('api/(:any)', static function () {
    return service('response')->setStatusCode(204);
});

$routes->get(
    'api/profile',
    'AuthController::profile',
    ['filter' => 'jwt']
);
