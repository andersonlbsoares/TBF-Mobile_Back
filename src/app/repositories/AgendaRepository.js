import connection from "../../config/database/connection.js";
import Crypto from "../../crypto/crypto.js";


class AgendaRepository {
    queryAgenda(sql, params = "") {
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

    create(agenda) {
        const sql =
            "INSERT INTO agendas (id_aluno_agenda, titulo_agenda, descricao_agenda, data_agenda, concluido_agenda, cor_agenda) VALUES ($1, $2, $3, $4, $5, $6);";
        return this.queryAgenda(sql, [
            agenda.idAlunoAgenda,
            agenda.tituloAgenda,
            agenda.descricaoAgenda,
            agenda.dataAgenda,
            agenda.concluidoAgenda,
            agenda.corAgenda
        ]);
    }

    findAll() {
        const sql = "SELECT * FROM agendas ORDER BY id_agenda ASC;";
        return this.queryAgenda(sql);
    }

    findById(idAgenda) {
        const sql = "SELECT * FROM agendas WHERE id_agenda = $1;";
        return this.queryAgenda(sql, [idAgenda]);
    }


    update(idAgenda, agenda) {
        const sql =
            "UPDATE agendas SET id_aluno_agenda = $1, titulo_agenda = $2, descricao_agenda = $3, data_agenda = $4, concluido_agenda = $5, cor_agenda = $6 WHERE id_agenda = $7;";
        return this.queryAgenda(sql, [
            agenda.idAlunoAgenda,
            agenda.tituloAgenda,
            agenda.descricaoAgenda,
            agenda.dataAgenda,
            agenda.concluidoAgenda,
            agenda.corAgenda,
            idAgenda,
        ]);
    }
    delete(idAgenda) {
        const sql = "DELETE FROM agendas WHERE id_agenda = $1;";
        return this.queryAgenda(sql, [idAgenda]);
    }

}

export default new AgendaRepository();