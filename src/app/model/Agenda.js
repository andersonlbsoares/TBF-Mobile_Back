class Agenda {
    _idAgenda;
    _idAlunoAgenda;
    _tituloAgenda;
    _descricaoAgenda;
    _dataAgenda;
    _concluidoAgenda;
    _corAgenda;

    constructor(idAlunoAgenda, tituloAgenda, descricaoAgenda, dataAgenda, concluidoAgenda, corAgenda) {
        this._idAlunoAgenda = idAlunoAgenda;
        this._tituloAgenda = tituloAgenda;
        this._descricaoAgenda = descricaoAgenda;
        this._dataAgenda = dataAgenda;
        this._concluidoAgenda = concluidoAgenda;
        this._corAgenda = corAgenda;
    }


    get idAgenda() {
        return this._idAgenda;
    }

    get idAlunoAgenda() {
        return this._idAlunoAgenda;
    }

    get tituloAgenda() {
        return this._tituloAgenda;
    }

    get descricaoAgenda() {
        return this._descricaoAgenda;
    }

    get dataAgenda() {
        return this._dataAgenda;
    }

    get concluidoAgenda() {
        return this._concluidoAgenda;
    }

    get corAgenda() {
        return this._corAgenda;
    }


    set idAlunoAgenda(idAlunoAgenda) {
        this._idAlunoAgenda = idAlunoAgenda;
    }

    set tituloAgenda(tituloAgenda) {
        this._tituloAgenda = tituloAgenda;
    }

    set descricaoAgenda(descricaoAgenda) {
        this._descricaoAgenda = descricaoAgenda;
    }

    set dataAgenda(dataAgenda) {
        this._dataAgenda = dataAgenda;
    }

    set concluidoAgenda(concluidoAgenda) {
        this._concluidoAgenda = concluidoAgenda;
    }

    set corAgenda(corAgenda) {
        this._corAgenda = corAgenda;
    }



}

export default Agenda;