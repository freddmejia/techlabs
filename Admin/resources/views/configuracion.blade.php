@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card card-default">
                <div class="card-header">CONFIGURACION GENERAL</div>
                <div class="card-body">
                <form method = "POST" action = "{{ action('ConfiguracionController@ActualizarConfiguracion') }}">
                @csrf
                <div class="col-md-4 mb-3">
                    <label for="validationCustom01">Copas</label>
                    <input type="text" class="form-control {{ ($errors->has('copas')) ? 'is invalid' : '' }}" id="validationCustom01" placeholder="Copas" name = "copas" value="{{ $configuracion != null ? $configuracion->copas : 0 }}" required>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="validationCustom02">Estrellas</label>
                    <input type="text" class="form-control {{ ($errors->has('estrellas')) ? 'is invalid' : '' }}" id="validationCustom02" placeholder="Estrellas" name = "estrellas" value="{{ $configuracion != null ? $configuracion->estrellas : 0 }}" required>
                </div>

                <button type="submit" class="btn btn-primary">ACTUALIZAR</button>

                </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection