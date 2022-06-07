<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\PasswordResetRequest;
use App\Notifications\PasswordResetNotification;
use App\Models\User;
use App\PasswordReset;
use Auth;
use Hash;
use Illuminate\Support\Facades\Validator;

class AuthController extends Controller
{
    public function login(LoginRequest $request)
    {
        // Check email
        $user = User::where('login', $request->login)->first();

        if (!$user) {
            return response()->json([
                'errors' => [
                    'login' => ['Login incorrecto']
                ]
            ], 401);
        }

        // Check password
        if (!$user || !Hash::check($request->password, $user->password)) {
            return response()->json([
                'errors' => [
                    'password' => ['Contraseña incorrecta']
                ]
            ], 401);
        }

        $token = $user->createToken(Str::random(20))->plainTextToken;
        $permissions = collect($user->roles()->pluck('name'))
            ->merge($user->permissions()->pluck('name'));

        return response()->json([
            'user' => $user->toJson(),
            'token' => $token,
            'permissions' => $permissions->toJson()
        ], 201);
    }

    public function logout(Request $request)
    {
        $user = $request->user();
        $user->tokens()->delete();

        return response()->json([
            'data' => 'Logged out!'
        ], 200);
    }
}
