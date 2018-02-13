@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <div class="card-header">REPORTE GENERAL</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif

                    <form method="GET" action="/home">
                        @csrf
                        DESDE : <input name="desde" type="date" />
                        HASTA : <input name="hasta" type="date"/>
                        <button type="submit" class="btn btn-primary">BUSCAR</button>
                    </form>

                <table class="table">
                <thead class="thead-dark">
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">Jugador</th>
                    <th scope="col">Genero</th>
                    <th scope="col">Copas</th>
                    <th scope="col">Estrellas</th>
                    </tr>
                </thead>
                <tbody>
                    <?php $i = 1; ?>
                    @foreach($jugadores as $jugador)
                    <tr>
                        <th>{{ $i++ }}</th>
                        <th>{{ $jugador->nickname }}</th>
                        <th>{{ $jugador->genero }}</th>
                        <th>{{ $jugador->copas }}</th>
                        <th>{{ $jugador->estrellas }}</th>
                    </tr>
                    @endforeach
                </tbody>
                </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
