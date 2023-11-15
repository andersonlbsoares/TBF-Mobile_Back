class Calendario {
    _idCalendario;
    _idAlunoCalendario;
    _horarioCalendario;
    _nomeDisciplinaCalendario;
    _nomeProfessorCalendario;
    _salaCalendario;
    _blocoCalendario;

    constructor(idAlunoCalendario, horarioCalendario, nomeDisciplinaCalendario, nomeProfessorCalendario, salaCalendario, blocoCalendario) {
        this._idAlunoCalendario = idAlunoCalendario;
        this._horarioCalendario = horarioCalendario;
        this._nomeDisciplinaCalendario = nomeDisciplinaCalendario;
        this._nomeProfessorCalendario = nomeProfessorCalendario;
        this._salaCalendario = salaCalendario;
        this._blocoCalendario = blocoCalendario;
    }

    get idCalendario() {
        return this._idCalendario;
    }

    get idAlunoCalendario() {
        return this._idAlunoCalendario;
    }

    get horarioCalendario() {
        return this._horarioCalendario;
    }

    get nomeDisciplinaCalendario() {
        return this._nomeDisciplinaCalendario;
    }

    get nomeProfessorCalendario() {
        return this._nomeProfessorCalendario;
    }

    get salaCalendario() {
        return this._salaCalendario;
    }

    get blocoCalendario() {
        return this._blocoCalendario;
    }

    set idAlunoCalendario(idAlunoCalendario) {
        this._idAlunoCalendario = idAlunoCalendario;
    }

    set horarioCalendario(horarioCalendario) {
        this._horarioCalendario = horarioCalendario;
    }

    set nomeDisciplinaCalendario(nomeDisciplinaCalendario) {
        this._nomeDisciplinaCalendario = nomeDisciplinaCalendario;
    }

    set nomeProfessorCalendario(nomeProfessorCalendario) {
        this._nomeProfessorCalendario = nomeProfessorCalendario;
    }

    set salaCalendario(salaCalendario) {
        this._salaCalendario = salaCalendario;
    }

    set blocoCalendario(blocoCalendario) {
        this._blocoCalendario = blocoCalendario;
    }

}

export default Calendario;