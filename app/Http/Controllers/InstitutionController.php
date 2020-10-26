<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Institution;
use Validator;
class InstitutionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $institutions = Institution::all();
        return $institutions;
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
            'id_institution' => 'required|max:11|unique:institutions',
            'name' => 'required|min:3|max:15',
            'address' => 'required',            
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $institution = Institution::create($request->all());        
        return response()->json(['message' => 'Institution created!']);
        
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $institution = Institution::where('id_institution', $id)->first();
        if($institution === null){
            return response()->json(['message' => 'Institution not found']);
            
        }else{
            return $institution;
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
        return $id;
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
        $institution = Institution::where('id_institution', $id)->first();
        if($institution === null){
            return response()->json(['message' => 'Institution not found']);
        }else{
            $rules = [
                'id_institution' => 'required|max:11|unique:institutions',
                'name' => 'required|min:3|max:15',
                'address' => 'required',            
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $institution->update($request->all());
            return $institution;
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
        $institution = Institution::where('id_institution', $id)->first();
        if($institution === null){
            return response()->json(['message' => 'Institution not found']);
        }else{
            $institution->delete();
            return response()->json(['message' => 'Institution deleted']);
        }
        
                  
    }
}
