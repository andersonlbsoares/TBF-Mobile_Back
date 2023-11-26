import connection from "../../config/database/connection.js";
import Crypto from "../../crypto/crypto.js";
class CalendarioRepository {
    queryCalendario(sql, params = "") {
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

    create(calendario) {
        const sql =
            "INSERT INTO calendarios (id_aluno_calendario, horario_calendario, nome_disciplina_calendario, nome_professor_calendario, sala_calendario, bloco_calendario) VALUES ($1, $2, $3, $4, $5, $6);";
        return this.queryCalendario(sql, [
            calendario.idAlunoCalendario,
            calendario.horarioCalendario,
            calendario.nomeDisciplinaCalendario,
            calendario.nomeProfessorCalendario,
            calendario.salaCalendario,
            calendario.blocoCalendario
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM calendarios ORDER BY id_calendario ASC;";
        return this.queryCalendario(sql);
    }

    findById(idCalendario) {
        const sql = "SELECT * FROM calendarios WHERE id_calendario = $1;";
        return this.queryCalendario(sql, [idCalendario]);
    }

    findByAluno(idAlunoCalendario) {
        const sql = "SELECT * FROM calendarios WHERE id_aluno_calendario = $1;";
        return this.queryCalendario(sql, [idAlunoCalendario]);
    }



    update(idCalendario, calendario) {
        const sql =
            "UPDATE calendarios SET id_aluno_calendario = $1, horario_calendario = $2, nome_disciplina_calendario = $3, nome_professor_calendario = $4, sala_calendario = $5, bloco_calendario = $6 WHERE id_calendario = $7;";
        return this.queryCalendario(sql, [
            calendario.idAlunoCalendario,
            calendario.horarioCalendario,
            calendario.nomeDisciplinaCalendario,
            calendario.nomeProfessorCalendario,
            calendario.salaCalendario,
            calendario.blocoCalendario,
            idCalendario,
        ]);
    }
    delete(idCalendario) {
        const sql = "DELETE FROM calendarios WHERE id_calendario = $1;";
        return this.queryCalendario(sql, [idCalendario]);
    }

}

export default new CalendarioRepository();