<?php

namespace App\Http\Controllers;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Models\Article;
use App\Models\Category;
use App\Http\Resources\ArticleResource;
use App\Http\Requests\StoreArticleRequest;
use Illuminate\Support\Facades\Auth;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *  @return \Illuminate\Http\Response;
     */
    public function index()
    {
        // Get the list of articles
        return ArticleResource::collection(
            Article::where('user_id', Auth::user()->id)->get()
        );
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreArticleRequest $request)
    {
        // Validate a request 
        $request->validated($request->all());

        $article = Article::create([
            'title' => $request->title,
            'description' => $request->description,
            'status' => $request->status,
            'date' => $request->date,
            'category_id' => Category::all()->random()->id,
            'user_id' => Auth::user()->id
        ]);

        return new ArticleResource($article);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id): Response
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id): Response
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id): RedirectResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id): RedirectResponse
    {
        //
    }

}
