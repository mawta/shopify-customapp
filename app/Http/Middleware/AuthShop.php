<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class AuthShop
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if (auth()->check()){
            return $next($request);
        }else{
            return redirect("/login_app");
//            return $next($request);

        }
    }
}
