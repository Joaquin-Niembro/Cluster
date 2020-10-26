<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Career;
use Validator;
class CareerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $careers = Career::all();
        return $careers;
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
            'id_career' => 'required|max:11|unique:careers',
            'name' => 'required|min:3|max:40',
            'institution' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $career = Career::create($request->all());
        return $career;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $career = Career::where('id_career', $id)->first();
        if($career === null){
            return response()->json(['message' => 'Career not found']);
        }else{
            return $career;
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
        $career = Career::where('id_career', $id)->first();
        if($career === null){
            return response()->json(['message' => 'Career not found']);
        }else{
            $rules = [
                'id_career' => 'required|max:11|unique:careers',
                'name' => 'required|min:3|max:15',
                'institution' => 'required'
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $career->update($request->all());
            return $career;
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
        $career = Career::where('id_career', $id)->first();
        if($career === null){
            return response()->json(['message' => 'Career not found']);
        }else{
            $career->delete();
            return response()->json(['message' => 'Career deleted']);
        }
    }
}
