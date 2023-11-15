import connection from "../../config/database/connection.js";
import Crypto from "../../crypto/crypto.js";

class AlunoRepository {
    queryAluno(sql, params = "") {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (error, result) => {
                if (error) {
                    const erro = {
                        erro: "SQL - reject",
                        message: error.message,
                    };
                    return reject(erro);
                } else {
                    const row = JSON.parse(JSON.stringify(result.rows));
                    return resolve(row);
                }
            });
        });
    }

    create(aluno) {
        const sql =
            "INSERT INTO alunos (nome_aluno, usuario_aluno, senha_aluno) VALUES ($1, $2, $3);";
        return this.queryAluno(sql, [
            aluno.nomeAluno,
            aluno.usuarioAluno,
            Crypto.applyHash(aluno.senhaAluno),
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM alunos ORDER BY id_aluno ASC;";
        return this.queryAluno(sql);
    }

    findById(idAluno) {
        const sql = "SELECT * FROM alunos WHERE id_aluno = $1;";
        return this.queryAluno(sql, [idAluno]);
    }


    findByNome(nomeAluno) {
        const sql = "SELECT * FROM alunos WHERE nome_aluno LIKE $1;";
        return this.queryAluno(sql, [nomeAluno]);
    }


    update(idAluno, aluno) {
        const sql =
            "UPDATE alunos SET nome_aluno = $1, usuario_aluno = $2, senha_aluno = $3 WHERE id_aluno = $4;";
        return this.queryAluno(sql, [
            aluno.nomeAluno,
            aluno.usuarioAluno,
            Crypto.applyHash(aluno.senhaAluno),
            idAluno,
        ]);
    }
    delete(idAluno) {
        const sql = "DELETE FROM alunos WHERE id_aluno = $1;";
        return this.queryAluno(sql, [idAluno]);
    }

    login(usuarioAluno, senhaAluno) {
        const sql = "SELECT * FROM alunos WHERE usuario_aluno = $1 AND senha_aluno = $2;";
        return this.queryAluno(sql, [usuarioAluno, Crypto.applyHash(senhaAluno)]);
    }
}

export default new AlunoRepository();