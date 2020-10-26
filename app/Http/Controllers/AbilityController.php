<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ability;
use Validator;
class AbilityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $abilities = Ability::all();
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
        $rules = [
            'id_ability' => 'required|max:11|unique:abilities',
            'name' => 'required|min:3|max:15',
            'description' => 'required|min:10'
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $ability = Ability::create($request->all());
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
        
        $ability = Ability::where('id_ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'Ability not found'], 404);
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
        $ability = Ability::where('id_ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'Ability not found'], 404);
        }else{
            $rules = [
                'id_ability' => 'required|max:11|unique:abilities',
                'name' => 'required|min:3|max:15',
                'description' => 'required|min:10'
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
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
        $ability = Ability::where('id_ability', $id)->first();
        if($ability === null){
            return response()->json(['message' => 'Ability not found'], 404);
        }else{
            $ability->delete();
            return response()->json(['message' => 'Ability deleted']);
        }
    }
}
