@extends('layouts.app')
@section('content')
<table class="table table-border">
    <tr>
        <th>id</th>
        <th>name</th>

        <th>email </th>
        <th>phone </th>
        <th>username </th>
        <th>password </th>
        <th>status </th>
        
    </tr>
    @foreach($customerlist as $customerlist)
    <tr>
        <td>{{$customerlist->id}}</td>
        <td>{{$customerlist->name}}</td>
       
        <td>{{$customerlist->email}}</td>
        <td>{{$customerlist->phone}}</td>
        <td>{{$customerlist->username}}</td>
        <td>{{$customerlist->password}}</td>
        <td>{{$customerlist->status}}</td>
        
        <td><a href="/customerupdate/{{$customerlist->id}}/{{$customerlist->name}}">Details</a></td>

        <td><a href="/customerDelete/{{$customerlist->id}}/{{$customerlist->name}}">Delete</a></td>

</tr>
@endforeach

</table>
@endsection