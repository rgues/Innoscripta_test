<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\LoginUserRequest;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    //
    use HttpResponses;

    /**
     *  Authenticate the user that call the API
    */
    public function login (LoginUserRequest $request) { 

        // Validate the request
        $request->validated($request->all());

        if (!Auth::attempt($request->only('email','password'))) {
            return $this->error('','Credentials do not match.',401);
        } 

         $user = User::where('email', $request->email)->first();

         return $this->success([
                'user' => $user,
                'token' => $user->createToken('API TOKEN of '. $user->name)->plainTextToken,
         ], 'User was successfully created', 200);
    }

    /**
    *  Register the user on the database
    */
    public function register (StoreUserRequest $request) {

        // Validate the request
        $request->validated($request->all());

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        if (isset($user)) {
            return $this->success([
                'user' => $user,
                'token' => $user->createToken('API TOKEN of '. $user->name)->plainTextToken
            ], 'User was successfully created', 200);
        } else {
            return $this->error($request, 'Failed to create the user', 400);
        }
    } 

    /**
    *  Register the user on the database
    */
    public function logout () {
        return response()->json([
        'message' => 'This is logout method'
        ]);
    }
}
