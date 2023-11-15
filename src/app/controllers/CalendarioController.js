import Calendario from "../model/Calendario.js";
import CalendarioRepository from "../repositories/CalendarioRepository.js";
import TokenService from "../services/TokenService.js";

class CalendarioController {
  async findAll(request, response) {
    try {
      const result = await CalendarioRepository.findAll();
      response.json(result);
    } catch (error) {
      response.json(error);
    }
  }

  async findById(request, response) {
    const id = request.params.idCalendario;
    try {
      const result = await CalendarioRepository.findById(id);
      if (Object.keys(result).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }

  async findByNome(request, response) {
    const nome = request.params.nomeCalendario;
    try {
      const result = await CalendarioRepository.findByNome(nome);
      if (Object.keys(result).length == 0) {
        response.json({ message: "Nome not found" });
      } else {
        response.json(result);
      }
    } catch (error) {
      response.json(error);
    }
  }


  async updateById(request, response) {
    const id = request.params.idCalendario;
    try {
      const exists = await CalendarioRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        try {
          const cliente = new Calendario(
            request.body.idAlunoCalendario,
            request.body.horarioCalendario,
            request.body.nomeDisciplinaCalendario,
            request.body.nomeProfessorCalendario,
            request.body.salaCalendario,
            request.body.blocoCalendario
          );
          await CalendarioRepository.update(id, cliente);
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
    const id = request.params.idCalendario;
    try {
      const exists = await CalendarioRepository.findById(id);
      if (Object.keys(exists).length == 0) {
        response.json({ message: "ID not found" });
      } else {
        await CalendarioRepository.delete(id);
        response.json({ message: "Success" });
      }
    } catch (error) {
      response.json(error);
    }
  }

  async store(request, response) {
    try {
      const cliente = new Calendario(
        request.body.idAlunoCalendario,
        request.body.horarioCalendario,
        request.body.nomeDisciplinaCalendario,
        request.body.nomeProfessorCalendario,
        request.body.salaCalendario,
        request.body.blocoCalendario
      );
      await CalendarioRepository.create(cliente);
      response.json({ message: "Success" });
    } catch (error) {
      response.json(error);
    }
  }


}

export default new CalendarioController();
