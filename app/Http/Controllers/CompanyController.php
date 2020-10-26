<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Company;
use Validator;
class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $companies = Company::all();
        return $companies;
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
            'id_company' => 'required|max:11|unique:companies',
            'name' => 'required|min:3|max:15',
            'rfc' => 'required|min:12|max:13',
            'address' => 'required',
            'profile' => 'required',
            'schedule' => 'required',
            'sector' => 'required'
        ];
        $validator = Validator::make($request->all(), $rules);
        if($validator->fails()){
            return response()->json($validator->errors(), 400);
        }
        $company = Company::create($request->all());
        return $company;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $company = Company::where('id_company', $id)->first();
        if($company === null){
            return response()->json(['message' => 'Company not found']);
        }else{
            return $company;
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
        $company = Company::where('id_company', $id)->first();
        if($company === null){
            return response()->json(['message' => 'Company not found']);
        }else{
            $rules = [
                'id_company' => 'required|max:11|unique:companies',
                'name' => 'required|min:3|max:15',
                'rfc' => 'required|min:12|max:13',
                'address' => 'required',
                'profile' => 'required',
                'schedule' => 'required',
                'sector' => 'required'
            ];
            $validator = Validator::make($request->all(), $rules);
            if($validator->fails()){
                return response()->json($validator->errors(), 400);
            }
            $company->update($request->all());
            return $company;
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
        $company = Company::where('id_company', $id)->first();
        if($company === null){
            return response()->json(['message' => 'Company not found']);
        }else{
            $company->delete();
            return response()->json(['message' => 'Company deleted!']);
        }
    }
}
