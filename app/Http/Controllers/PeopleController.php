<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\People;
use Validator;
class PeopleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $people = People::all();
        return $people;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        
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
            'id_person' => 'required|max:11|unique:people',
            'name' => 'required|min:3|max:15',
            'apellidoPaterno' => 'required|min:3|max:15',   
            'apellidoMaterno' => 'required|min:3|max:15',
            'email' => 'required|email',
            'address' => 'required',
            'institution' => 'required',
            'career' => 'required'      
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $people = People::create($request->all());
        return response()->json($people);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $person = People::where('id_person', $id)->first();
        if($person === null){
            return response()->json(['message' => 'Person not found']);
        }else{
            return $person;
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
        $person = People::where('id_person', $id)->first();
        if($person === null){
            return response()->json(['message' => 'Person not found']);
        }else{
            $rules = [
                'id_person' => 'required|max:11|unique:people',
                'name' => 'required|min:3|max:15',
                'apellidoPaterno' => 'required|min:3|max:15',   
                'apellidoMaterno' => 'required|min:3|max:15',
                'email' => 'required|email',
                'address' => 'required',
                'institution' => 'required',
                'career' => 'required'      
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $person->update($request->all());
            return $person;
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
        $person = People::where('id_person', $id)->first();
        if($person === null){
            return response()->json(['message' => 'Person not found!']);
        }else{
            $person->delete();
            return response()->json(['message' => 'Person deleted!']);
        }
    }
}
