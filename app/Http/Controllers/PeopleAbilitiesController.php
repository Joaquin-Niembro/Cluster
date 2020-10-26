<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\PeopleAbility;
class PeopleAbilitiesController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $abilities = PeopleAbility::all();
        return $abilities;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $ability = PeopleAbility::create($request->all());
        return $ability;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $ability = PeopleAbility::where('ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'person`s ability not found']);
        }else{
            return $ability;
        }
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $ability = PeopleAbility::where('ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'person`s ability not found']);
        }else{
            $ability->update($request->all());
            return $ability;
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $ability = PeopleAbility::where('ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'person`s ability not found']);
        }else{
            $ability->delete();
            return $ability;
        }
    }
}
