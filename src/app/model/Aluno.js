class Aluno {
    _idAluno;
    _nomeAluno;
    _usuarioAluno;
    _senhaAluno;

    constructor(nomeAluno, usuarioAluno, senhaAluno) {
        this._nomeAluno = nomeAluno;
        this._usuarioAluno = usuarioAluno;
        this._senhaAluno = senhaAluno;
    }

    get idAluno() {
        return this._idAluno;
    }

    get nomeAluno() {
        return this._nomeAluno;
    }

    get usuarioAluno() {
        return this._usuarioAluno;
    }

    get senhaAluno() {
        return this._senhaAluno;
    }


    set nomeAluno(nomeAluno) {
        this._nomeAluno = nomeAluno;
    }

    set usuarioAluno(usuarioAluno) {
        this._usuarioAluno = usuarioAluno;
    }

    set senhaAluno(senhaAluno) {
        this._senhaAluno = senhaAluno;
    }

}

export default Aluno;