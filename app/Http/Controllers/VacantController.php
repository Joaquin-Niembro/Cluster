<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Vacant;
use Validator;
class VacantController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $vacants = Vacant::all();
        return $vacants;
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
            'id_vacant' => 'required|max:11|unique:vacants',
            'salary' => 'required|min:3|max:7',
            'description' => 'required|min:10',
            'duration' => 'required',
            'company' => 'required',
            'ability' => 'required'                 
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $vacant = Vacant::create($request->all());
        return $vacant;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $vacant = Vacant::where('id_vacant', $id)->first();
        if($vacant === null){
            return response()->json(['message' => 'Vacant not found']);
        }else{
            return $vacant;
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
        $vacant = Vacant::where('id_vacant', $id)->first();
        if($vacant === null){
            return response()->json(['message' => 'Vacant not found']);
        }else{
            $rules = [
                'id_vacant' => 'required|max:11|unique:vacants',
                'salary' => 'required|min:3|max:7',
                'description' => 'required|min:10',
                'duration' => 'required',
                'company' => 'required',
                'ability' => 'required'                 
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $vacant->update($request->all());
            return $vacant;
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
        $vacant = Vacant::where('id_vacant', $id)->first();
        if($vacant === null){
            return response()->json(['message' => 'Vacant not found!']);
        }else{
            $vacant->delete();
            return response()->json(['message' => 'Vacant deleted!']);
        }
    }
}
