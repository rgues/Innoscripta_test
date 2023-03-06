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
use App\Traits\HttpResponses;

class NewsController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     *  @return \Illuminate\Http\Response;
     */
    public function index()
    {
        // Get the list of articles
        $articles = Article::where('user_id', Auth::user()->id)->get();
        return ArticleResource::collection($articles);
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
            'category_id' => Category::all()->random()->id,
            'user_id' => Auth::user()->id
        ]);

        return new ArticleResource($article);
    }

    /**
     * Display the specified resource.
     */
    public function show(Article $article)
    {

        if (Auth::user()->id !== $article->user_id) {
            return $this->error('','You are not authorized to make this request',403);
        }

        return new ArticleResource($article);
       
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
    public function update(Request $request, Article $article)
    {
        //
        $article->update($request->all());
        return new ArticleResource($article);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Article $article)
    {
        //
        $article->delete();
        return $this->success('','The article has been successfully deleted.',200);
    }

}
