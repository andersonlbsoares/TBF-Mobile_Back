import Agenda from "../model/Agenda.js";
import AgendaRepository from "../repositories/AgendaRepository.js";
import TokenService from "../services/TokenService.js";

class AgendaController {
  async findAll(request, response) {
    try {
      const result = await AgendaRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idAgenda;
    try {
      const result = await AgendaRepository.findById(id);
      if (Object.keys(result).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async updateById(request, response) {
    const id = request.params.idAgenda;
    try {
      const exists = await AgendaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const agenda = new Agenda(
            request.body.idAlunoAgenda,
            request.body.tituloAgenda,
            request.body.descricaoAgenda,
            request.body.dataAgenda,
            request.body.concluidoAgenda,
            request.body.corAgenda
          );
          await AgendaRepository.update(id, agenda);
          response.json({ message: "Success" });
        } catch (error) {
          response.json(error);
        }
      }
    } catch (error) {
      response.json(error);
    }
  }

  async deleteById(request, response) {
    const id = request.params.idAgenda;
    try {
      const exists = await AgendaRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await AgendaRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const agenda = new Agenda(
        request.body.idAlunoAgenda,
        request.body.tituloAgenda,
        request.body.descricaoAgenda,
        request.body.dataAgenda,
        request.body.concluidoAgenda,
        request.body.corAgenda
      );

      await AgendaRepository.create(agenda);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }
}

export default new AgendaController();