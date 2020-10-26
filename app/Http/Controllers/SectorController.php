<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Sector;
use Validator;
class SectorController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $sectors = Sector::all();
        return $sectors;
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
            'id_sector' => 'required|max:11|unique:sectors',
            'name' => 'required|min:3|max:15',
            'description' => 'required|min:10'                 
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $sector = Sector::create($request->all());
        return $sector;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $sector = Sector::where('id_sector', $id)->first();
        if($sector === null){
            return response()->json(['message' => 'Sector not found']);
        }else{
            return $sector;
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
        $sector = Sector::where('id_sector', $id)->first();
        if($sector === null){
            return response()->json(['message' => 'Sector not found']);
        }else{
            $rules = [
                'id_sector' => 'required|max:11|unique:sectors',
                'name' => 'required|min:3|max:15',
                'description' => 'required|min:10'                 
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $sector->update($request->all());
            return $sector;
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
        $sector = Sector::where('id_sector', $id)->first();
        if($sector === null){
            return response()->json(['message' => 'Sector not found']);
        }else{
            $sector->delete();
            return response()->json(['message' => 'Sector deleted']);
        }
    }
}
